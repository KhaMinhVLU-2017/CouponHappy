import axios from 'axios'
import {apiDummy} from '../Configs/index'

let getListProduct = _ => axios.get(apiDummy)

export {getListProduct}