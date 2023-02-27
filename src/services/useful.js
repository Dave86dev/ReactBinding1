
export const ErrorCheck = (name, value) => {

    switch (name) {

        case "name":
        case "surname":
        case "address":
        case "nickname":

            break;

        case "email":

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
                //We found an error....
                return  true;
            }

            break;

        case "password":

            if (value.length < 8) {
                return true;
            }

            break;

    }

    return false;
};