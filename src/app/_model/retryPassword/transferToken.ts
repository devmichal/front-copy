export class TransferToken {

  userToken: string;
  tokenCsrf: string;

  constructor(
    userToken: string,
    tokenCsrf: string
  ) {
    this.userToken = userToken;
    this.tokenCsrf = tokenCsrf;
  }

}
