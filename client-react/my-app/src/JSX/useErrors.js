import { useState } from "react";

export const useErrors = (error) => {
    const statusCode = error.response.status;

    const [message, setMessage] = useState()
    switch (statusCode) {
        case 403:
            swal("", "רשת נפלה", "error");
            break;
        case 404:
            swal("", "משתמש לא קיים. יש לעבור להרשמה", "error");
            nav("/signIn");
            break;
        case 500:
            swal("", "סיסמא שגויה!", "error");
            break;
        default:
            swal("", "An unexpected error occurred", "error");
            break;
    }

    return message
}