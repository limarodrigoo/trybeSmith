import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

interface Iuser {
  username: string;
  password: string;
  iat?: number;
  exp?: number;
}

dotenv.config();
export default class JwtService {
  public genToken = (payload: object) :string => {
    const token = Jwt.sign(payload, 'SEGREDO', {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return token;
  };

  public validateToken = (token: string) : Iuser | false => {
    try {
      return Jwt.verify(token, 'SEGREDO') as Iuser;
    } catch (e) {
      return false;
    }
  };
}
