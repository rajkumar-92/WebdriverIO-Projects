const Utility = require("../../Utilities/Utility");

class webautomation {

    get dropdown() {
        return $('#dropdown-class-example');
    }

    get checkbox() {
        return $('#checkbox-example [value="option2"]')
    }

    get checkboxes() {
        return $$('#checkbox-example input[type="checkbox"]')
    }

    get suggestiondropdown1() {
        return $('#select-class-example #autocomplete');
    }

    get suggestiondropdown2() {

        return $$('#ui-id-1 li[class="ui-menu-item"] div');
    }

    get entertxt() {
        return $('#name');
    }
    get alertbtn() {
        return $('#alertbtn');
    }

    get confirmbtn() {
        return $('#confirmbtn');
    }

    get clickOnHideBtn() {
        return $('#hide-textbox');
    }

    get clickOnShowBtn() {
        return $('#show-textbox');
    }

    get displaytxtBox() {
        return $('#displayed-text');
    }

    get mouseover() {
        return $('#mousehover');
    }

    get switchTab() {
        return $('#opentab');
    }
    get RestApi() {
        return $("//li[@class='gf-li']//a[text()='REST API']")
    }

    get Appium() {
        return $("//li[@class='gf-li']//a[text()='Appium']")
    }

    get switchToWindow() {
        return $('#openwindow');
    }

    get clickonTop() {
        return $("div[class='mouse-hover-content']>a:nth-child(1)");
    }

    get frame() {
        return $('#courses-iframe')
    }

    get clickonJoin() {
        return $("//div[@class='form-group text-center']//a")
    }
    get clickonLink() {
        return $('//a[@class="blinkingText"]');

    }

    get webtable() {
        return $("//div[@class='left-align']//*[text()='Web Table Example']");

    }
  

    

}

module.exports = new webautomation();