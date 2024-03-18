const city = require("../models/city")
const advertiser=require("../models/advertiser")
module.exports = {
    create: (req, res) => {
        advertiser.findById(req.params.id)
            .then((exists) => {
                if (!exists) {
                    return res.status(404).send({ message: `you arnt advertiser!` });
                }
                else {
                    const { cityName } = req.body;
                    city.find( {cityName:cityName})
                        .then((ca) => {
                            if (ca.length === 0) {
                                const newC = new city(req.body);
                                return newC.save();
                            } else {
                                return res.status(404).send({ message: `Category already exists!` });
                            }
                        })
                        .then((c) => {
                            res.status(200).send({ message: `create category ${c._id} succeed!` });
                        })
                        .catch((err) => {
                            res.status(500).send({ message: `הגיע לשגיאה ביצירת הקטגוריה` });
                        });
                }
            })
            .catch((err) => {
                res.status(404).send({ err:err.message });
            });
    }
// create: (req, res) => {
//     advertiser.findById(req.params.id)
//     .then((exsits) => {
//         if (!exsits) {
//             res.status(404).send({ message: `you arnt advetiser!` })
//         }
//         // res.status(200).send({ message: `delete article ${article._id} succeed!` })
//     })
//     const {cityName} = req.body

// city.find({name:{$eq:cityName}})
// .then((ca) => {
//     // if (ca) {
//     //     res.status(404).send({ message: `city has been exists already!` })
//     // }
//     const c = new city({
//         cityName
//     })
//     c.save()
// })
// .then((c) => {
//     res.status(200).send({ message: `add city ${c._id} succeed!` })
// })
// .catch((err) => {
//     res.status(500).send({ error: err.message })
// })
// },
,
getAllCities: (req, res) => {

    city.find()
        // בהצלחה מתקבל מעך המכיל את כל האובייקטים המתאימים
        .then((list) => {
            res.status(200).send({ cities : list })
        })
        .catch((err) => {
            res.status(404).send({ error: err.message })
        })
}
}