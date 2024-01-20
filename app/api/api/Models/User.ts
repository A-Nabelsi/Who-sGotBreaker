import { Model, models, model } from "mongoose";
import { Document, Schema } from "mongoose";


interface UserDocument extends Document{
    email: string;
    name: string;
    password: string;
}

interface Methods {
    comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument, {}, Methods>({
    email: {type: String, required: true, unique: true},
    name: { type: String, required: true, trim: true },
    password: {type: String, required: true},
});

const UserModel = models.User || model("User", userSchema);

export default UserModel as Model<UserDocument, {}, Methods>;
