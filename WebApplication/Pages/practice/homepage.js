class Homepage{
get pageHeader() {return $("//h1[text()='Love your software']")}
get subHeading(){return $('div.banner-text-content>p.sub-text')}
get supportLink(){return $("//a[text()='Support']")}



}

module.exports=new Homepage();