import mongoose from 'mongoose'
import { UserDoc } from '../auth/user.interfaces'
import { CartProductDoc } from './cart-product.interfaces';

export interface CartDoc extends mongoose.Document {
    user : UserDoc | string;
    products : Array<CartProductDoc | string>
    totalPrice : number
}
export interface CartModel extends mongoose.Model<CartDoc>{}