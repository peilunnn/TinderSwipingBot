class TinderBot {

    like() {
        const buttons = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand D(b) Bgc(#fff) Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a");
        for (let button of buttons) {
            if (button.getAttribute("aria-label") === "Like") {
                button.click();
            }
        }
    }

    dislike() {
        const buttons = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand D(b) Bgc(#fff) Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a");
        for (let button of buttons) {
            if (button.getAttribute("aria-label") === "Nope") {
                button.click();
            }
        }
    }


    closePopupMatch() {
        const closePopupMatchText = document.getElementsByClassName("Pt(20px) Pb(40px) C(#fff) Fw($bold) Tt(u) Lts($ls-s) D(b) W(100%) Trsdu($slow) active").item(0);
        if (closePopupMatchText != null) {
            closePopupMatchText.click();
        }
    }
}

bot = new TinderBot();
while (true) {
    i = Math.floor(Math.random() * 10)
    if (i < 8) {
        setTimeout(() => bot.like(), 1000);
        setTimeout(() => bot.closePopupMatch(), 2000);
    }
    else {
        setTimeout(() => bot.dislike(), 1000);
        setTimeout(() => bot.closePopupMatch(), 2000);
    }
}