import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export default class JwtService {
  public genToken = (payload: object) :string => {
    const token = Jwt.sign(payload, 'SEGREDO', {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return token;
  };
}
