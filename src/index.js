
//Menu movil
document.getElementById('btn-menu').addEventListener('click', () => {
    const menuElement = document.getElementById('menu');
    menuElement.classList.toggle('translate-x-0');
    menuElement.classList.toggle('translate-x-[-100%]');
});

document.getElementById('btn-sun').addEventListener('click', () => changeTheme())
document.getElementById('btn-moon').addEventListener('click', () => changeTheme())
const toggle = document.getElementById('toggle');

const changeTheme = () => {
    const theme = localStorage.getItem('theme') ?? 'light';
    if (theme === 'dark') {
        document.documentElement.classList.remove('dark')
        toggle.classList.add('translate-x-12');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark')
        toggle.classList.remove('translate-x-12');
        localStorage.setItem('theme', 'dark');
    }
}

const main = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    const theme = localStorage.getItem('theme') ?? 'dark';
    if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        toggle.classList.remove('translate-x-12');
    } else {
        document.documentElement.classList.remove('dark')
        toggle.classList.add('translate-x-12');
    }
}

main();