import { DataSource } from "typeorm";
import connectDB from "../data-source";
import { TokenUtil } from "../utils/token.util";

export class AuthService {
  private readonly connection: DataSource;

  constructor() {
    this.connection = connectDB;
  }

  async forgotPassword(email) {
    try {
      const repository = this.connection.getRepository("user");
      const tokenRepository = this.connection.getRepository("token");

      const userData = await repository.findOneBy({
        email: email,
      });

      if (!userData) {
        throw new Error(`No user found with this email address: ${email}`);
      }
      const tokenUtil = new TokenUtil(process.env.JWT_SECRET);
      const resetToken = await tokenUtil.generateResetToken(userData);

      await tokenRepository.save({ userId: userData.id, token: resetToken });

      //   await tokenUtil.sendEmail(email, resetToken);
      return { message: "Password reset email sent successfully" };
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to save data to the database: ${error}`);
    }
  }
}
