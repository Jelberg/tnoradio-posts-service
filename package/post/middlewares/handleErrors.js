import GeneralError from '../utils/errors';

const handleErrors = (err, req, res, next) => {
    console.log("HANDLE ERRORS FUNC");
    if (err instanceof GeneralError) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        });
    }

    console.log("HUBO ERROR 500");

    return res.status(500).json({
        status: 'error',
        message: err.message
    });
}


export default handleErrors;