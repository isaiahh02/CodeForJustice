let theClass = "less";

function toggleText()
{
    let text="<a target='_blank' href='https://www.unicefusa.org/?form=FUNXHOLIRXQ&utm_content=RSARamadan-2022&ms=cpc_dig_2022_RSARamadan-2022_20221503_google_RSARamadan-2022_delve_None&initialms=cpc_dig_2022_RSARamadan-2022_20221503_google_RSARamadan-2022_delve_None&gclid=Cj0KCQjwm6KUBhC3ARIsACIwxBive2MbIlrIQWimrL1WOkeRsCwbyYtpSyB0KEmk0kPsXNPIaYBcw5IaAvu6EALw_wcB'>" 
    + "UNICEF United States Fund" + "</a><br>" +
    "<a target='_blank' href='https://donate.worldvision.org/gift-catalog/hunger-relief'>" 
    + "World Vision Hunger Relief" + "</a><br>" +
    "<a target='_blank' href='https://www.actionagainsthunger.org/donate/save-lives-end-hunger'>" 
    + "Action Against Hunger" + "</a><br>" +
    "<a target='_blank' href='https://secure.feedingamerica.org/site/Donation2;jsessionid=00000000.app20020b?idb=1235110709&df_id=26876&26876.donation=form1&mfc_pref=T&NONCE_TOKEN=24998A3BF0E736BA8FFB0B3AEF757E7C&s_channel=no_channel&s_onsite_promo=MainNav_Donate&s_subsrc=https://www.feedingamerica.org/&s_src=W225DIRCT&26876_donation=form1&_ga=2.82892496.71923567.1653171341-678963715.1653171341'>" 
    + "Feeding America" + "</a><br>";
    
    if (theClass == "less") {
        document.getElementById("donateSites").innerHTML=text;
        theClass = "more";
    } 
}
