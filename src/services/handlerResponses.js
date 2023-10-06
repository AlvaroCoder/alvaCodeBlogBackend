class ErrorResponse extends Error{
    constructor(message){
        super(message);
    }
    getError(){
        return {
            "error":true,
            "status":404,
            "message":this.message
        }
    }

}
class SuccesResponse{
    constructor(message){
        this.message = message;
        this.status = 200;
    }
    getSuccess(){
        return {
            "error":false,
            "status":this.status,
            "message":this.message
        }
    }
}
module.exports={ErrorResponse, SuccesResponse}