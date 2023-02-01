import mongoose from "mongoose";


mongoose.connect(mongoDB)

const connect = () => {

    mongoose.connect(
        mongoDB,
        {   keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (err) {
                console.log('DB: ERROR !!');
            } else {
                console.log('Conexion correcta!!')
            }
        }
    )
}

connect()

export default connect 