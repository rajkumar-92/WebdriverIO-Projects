class loginPage {

    get userName() {
        return $('#email');
    }

    get passWord() {
        return $('#pass');
    }

    get clickBtn() {
        return $("//button[@type='submit']");
    }

    async EnterUserName(text) {
        await this.userName.setValue(text);
    }

    async EnterPwd(text) {
        await this.passWord.setValue(text);
    }

    async click_LoginBtn() {
        await this.clickBtn.click();
    }

   
}
module.exports = new loginPage();