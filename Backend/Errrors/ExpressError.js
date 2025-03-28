class ExpressError extends Error{
    constructor(status,massage){
        super();
        this.status = status;
        this.massage = massage;
    }
}
module.exports = ExpressError;