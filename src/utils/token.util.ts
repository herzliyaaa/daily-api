import * as jwt from 'jsonwebtoken';
import * as bcryptjs from 'bcryptjs';

export class TokenUtil {
  private readonly jwtSecret: string;

  constructor(jwtSecret: string) {
    this.jwtSecret = jwtSecret;
  }

  async generateResetToken(user: any): Promise<string> {
    const token = jwt.sign({ userId: user.id }, this.jwtSecret, { expiresIn: '12h' });
    return await bcryptjs.hash(token, 10);
  }

  async sendPasswordResetEmail(email: string, token: string): Promise<void> {
    // Implement your email sending logic here
    // ...
  }
}

// Usage:
// const tokenUtil = new TokenUtil(process.env.JWT_SECRET);
// const resetToken = await tokenUtil.generateResetToken(user);
// await tokenUtil.sendPasswordResetEmail(user.email, resetToken);
