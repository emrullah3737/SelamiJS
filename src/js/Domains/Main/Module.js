import css from "../../../assets/main.css";

export default class{

    constructor(config)
    {
        this.config = config;
    }

    print() 
    {
        $("#app").append("<p>" + this.config.name + "</p>");
        $("#app").append("<p>Module version is: " + this.config.ver + "</p>");

    }
}