const apartment = require("../models/apartment")
const advertiser = require("../models/advertiser")
const city = require("../models/city")
const category = require("../models/category")
const axios=require("axios")
// const fs = require('fs');
// const apartment = require("../models/apartment")


module.exports = {
    create: (req, res) => {
        const { path: image } = req.file
        const { apartmentName,description,price,categoryId, cityId,address,numOfBeds,additives, advertiserId } = req.body
      
        const newApartment=new apartment({
            apartmentName,
            description,
            image: image.replace('\\', '/'),
            price,
            categoryId,
            cityId,
            address,
            numOfBeds,
            additives,
            advertiserId
        })
        const c = new apartment(newApartment)

        c.save()
            .then((c) => {
                //עדכון שדות וירטואליים
                
                 //עדכון מפרסם
                advertiser.findByIdAndUpdate(advertiserId, { $push: { apartmentArray: c._id } }, { new: true })
                    .then(() => {
                 //עדכון בקטגוריה
                        category.findByIdAndUpdate(categoryId, { $push: { apartmentArray: c._id } }, { new: true })
                            .then(() => {
                 //עדכון בעיר
                                city.findByIdAndUpdate(cityId, { $push: { apartmentArray: c._id } }, { new: true })
                                    .then(() => {
                                        res.status(200).send({ message: `create apartment ${c._id} succeed!` })
                                    })
                                    .catch((err) => {
                                        console.log("1");
                                        res.status(501).send({ error: err.message })
                                    })
                            })
                            .catch((err) => {
                                console.log("2");
                                res.status(502).send({ error: err.message })
                            })
                    })
                    .catch((err) => {
                        console.log("3");
                        res.status(503).send({ error: err.message })
                    })
            })
            .catch((err) => {
                console.log("4");
                res.status(504).send({ error: err.message })
            })
    },
    delete: (req, res) => {
     
        apartment.findByIdAndDelete({ _id: req.params.apartment, advertiserId: req.params.id })
            .then((p) => {
                if (!p) {
                    return res.status(404).send({ message: `Apartment not found` });
                }
                const { categoryId, cityId, advertiserId } = p; 
                const promises = [
                    advertiser.findByIdAndUpdate(advertiserId, { $pull: { apartmentArray: p._id } }, { new: true }),
                    category.findByIdAndUpdate(categoryId, { $pull: { apartmentArray: p._id } }, { new: true }),
                    city.findByIdAndUpdate(cityId, { $pull: { apartmentArray: p._id } }, { new: true })
                ];
                return Promise.all(promises).then(() => {
                    res.status(200).send({ message: `Delete apartment ${p._id} succeed!` });
                });
            })
            .catch((err) => {
                res.status(500).send({ error: err.message });
            });
    },
    update: ((req, res) => {
        const { _id } = req.body;
        const allowedFields = ['apartmentName', 'description', 'image', 'address', 'numOfBeds', 'additives', 'price']; // Fields that can be updated
        try {
            const updates = {};
            allowedFields.forEach(field => {
                if (req.body[field] !== undefined) {
                    updates[field] = req.body[field];
                }
            });          
            apartment.findByIdAndUpdate({ _id: _id, advertiserId: req.params.id }, updates, { new: true })
            .then(updatedDoc => {
                console.log(updatedDoc);
                res.status(200).send({ message: `Your apartment has been updated!` });
            })
        }
        catch (error) {
            res.status(400).send({ error: 'An error occurred while updating the apartment' });
        }
    }),
    getById: (req, res) => {
        apartment.findById({ _id: req.params.id })
            .then((a) => {
                res.status(200).send({ apartment: a })
            })
            .catch((err) => {
                res.status(404).send({ message: `apartment not found!` })
            })
    },
    getByCityId: (req, res) => {
        const _id = req.params.id

        city.findById(_id).populate('apartment')
            .then((city) => {
                res.status(200).send({ city })
            })
            .catch((err) => {
                res.status(404).send({ message: `apartment not found!` })
            })
    },
    getByCategoryId: (req, res) => {
        const _id = req.params.id

        category.findById(_id).populate('apartment')
            .then((apartment) => {
                res.status(200).send({ apartment })
            })
            .catch((err) => {
                res.status(404).send({ message: `apartment not found!` })
            })
    },
    getByAdvertiserId: (req, res) => {
        const _id = req.params.id
        advertiser.findById(_id).populate({
            path: 'apartmentArray'
        })
            .then((exsits) => {
                res.status(200).send( exsits.apartmentArray )

            })
            .catch((err) => {
                res.status(410).send({ message: `advertiser not found!` })
            })
    },
    getAllApartment: (req, res) => {
        apartment.find()
            .then((list) => {
                res.status(200).send({ apartment: list })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    getByPrice: (req, res) => {
        apartment.find().select()
            .then((list) => {
                res.status(200).send({ apartment: list })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    getByBiggerThenPrice: (req, res) => {
        const { currentPrice } = req.params.price
        apartment.find().where("price").gte(currentPrice)
            .then((a) => {
                res.status(200).send({ apartment: a })
            })
            .catch((err) => {
                res.status(404).send({ message: `apartment not found!` })
            })
    },
    getByLittleThenPrice: (req, res) => {
        const { currentPrice } = req.params.price
        apartment.find().where("price").$lt(currentPrice)
            .then((a) => {
                res.status(200).send({ apartment: a })
            })
            .catch((err) => {
                res.status(404).send({ message: `apartment not found!` })
            })
    },
    getByIp: (req, res) => {
        const accessToken = 'ce57630dddb9b0';
        const ip = req.params.userIp; // כתובת ה-IP שברצונך לבדוק
        let mycity = ""; // שימוש ב-let כדי שנוכל לשנות את ערכו
    
        axios.get(`https://ipinfo.io/${ip}/json?token=${accessToken}`)
            .then(response => {
                mycity = response.data.city; // עדכון של mycity
         
                // console.log(`מיקום: ${response.data.city}, ${response.data.region}, ${response.data.country}`);
                return city.findOne({ cityName: mycity }).populate({path:'apartmentArray'});
            })
            .then(city => {
                res.status(200).send( city.apartmentArray );
            })
            .catch(error => {
                console.error('התרחשה שגיאה:', error);
                // שלח תגובת שגיאה רק אם לא נשלחה תגובה קודם לכן
                if (!res.headersSent) {
                    res.status(500).send({message: 'שגיאה בקבלת מידע על ה-IP או בחיפוש העיר'});
                }
            });
        }
}