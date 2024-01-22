chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "runContentScript") {
        console.log("Content script is running!");
        const menuButtons = document.getElementsByClassName('game-menu-button_button__WPwVi"');
        const classicMaps = menubuttons[1]
        window.resizeTo(882, 1000)
        classicMaps.click()
        setTimeout(function() {
            green_buttons = document.getElementsByClassName('button_button__CnARx');
            play = green_buttons[3];
            play.click()
        }, 1000)
        for (let i = 0; i < 5; i++){
            setTimeout(function() {
                for (let i = 0; i < 4; j++){
                    setTimeout(async function() {
                        rotate(i)
                        hide_elements()
                        const Screenshoturl = await chrome.tabs.captureVisibleTab();
                        setTimeout(show_elements, 500)
                    }, 2000)
                }
            }, 2000)
        }
    }
  });

function show_elements() {
    let controls = document.querySelector('.game_controls___pIfC');
    let hud = document.querySelector('.game_status__q_b7N');
    let map = document.querySelector('.game_guessMap__MTlQ_');
    let logo = document.querySelector('.game_inGameLogos__aDZlA');
    let arrows = document.querySelector('.SLHIdE-sv-links-control');

    if (controls) controls.style.display = '';
    if (hud) hud.style.display = '';
    if (map) map.style.display = '';
    if (logo) logo.style.display = '';
    if (arrows) arrows.style.display = '';
}

function hide_elements() {
    let controls = document.querySelector('.game_controls___pIfC');
    let hud = document.querySelector('.game_status__q_b7N');
    let map = document.querySelector('.game_guessMap__MTlQ_');
    let logo = document.querySelector('.game_inGameLogos__aDZlA');
    let arrows = document.querySelector('.SLHIdE-sv-links-control');

    if (controls) controls.style.display = 'none';
    if (hud) hud.style.display = 'none';
    if (map) map.style.display = 'none';
    if (logo) logo.style.display = 'none';
    if (arrows) arrows.style.display = 'none';
}
function show_elements() {
    let controls = document.querySelector('.game_controls___pIfC');
    let hud = document.querySelector('.game_status__q_b7N');
    let map = document.querySelector('.game_guessMap__MTlQ_');
    let logo = document.querySelector('.game_inGameLogos__aDZlA');
    let arrows = document.querySelector('.SLHIdE-sv-links-control');

    if (controls) controls.style.display = '';
    if (hud) hud.style.display = '';
    if (map) map.style.display = '';
    if (logo) logo.style.display = '';
    if (arrows) arrows.style.display = '';
}

function rotate(num) {
    let compass = document.querySelector('.compass_circle__AdgHI');
    if (!compass) return;
    const rect = compass.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    if (num == 0) centerY -=3;
    else if (num == 1) centerX +=3
    else if (num == 2) centerY +=3
    else if (num == 3) centerX -=3
    const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: clickX,
        clientY: clickY,
        screenX: window.screenX + clickX,
        screenY: window.screenY + clickY
    });
    compass.dispatchEvent(clickEvent);
}