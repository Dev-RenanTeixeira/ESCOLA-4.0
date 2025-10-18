'use strict';

(function(){
    const TOGGLE_ID = 'theme-toggle';
    const STORAGE_KEY = 'site-theme';
    const btn = document.getElementById(TOGGLE_ID);
    const body = document.body;

    function applyTheme(theme){
        if(theme === 'light'){
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        } else {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
        }
        if(btn){
            btn.textContent = theme === 'light' ? 'Modo Escuro' : 'Modo Claro';
        }
    }

    function currentTheme(){
        return body.classList.contains('light-theme') ? 'light' : 'dark';
    }

    // inicializa a partir do localStorage se houver
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved === 'light' || saved === 'dark'){
        applyTheme(saved);
    } else {
        // mantém a classe atual do body (se existir) ou assume dark
        const init = currentTheme();
        applyTheme(init);
    }

    if(btn){
        btn.addEventListener('click', function(){
            const next = currentTheme() === 'light' ? 'dark' : 'light';
            applyTheme(next);
            localStorage.setItem(STORAGE_KEY, next);
        });
    }

})();