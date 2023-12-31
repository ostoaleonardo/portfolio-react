import { useDarkMode, useLanguage, useStrings, useTitle } from '../../hooks'
import Icons from './Icons.jsx'

export function Dropdown() {
    const { setTitle, setSubtitle } = useTitle()
    const { language, toggleLanguage } = useLanguage()
    const { strings } = useStrings()
    const { theme, toggleTheme } = useDarkMode()

    const openDropdown = () => {
        setTitle(strings.dropdown.open)
        setSubtitle(strings.dropdown.settings)
    }

    const closeDropdown = () => {
        setTitle(strings.ledScreen.title)
        setSubtitle('')
    }

    return (
        <section
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            className='absolute top-12 right-0 flex flex-col items-end group'
        >
            <div className='w-fit bg-white aspectd-square leading-none px-2 py-1'>
                <span className='flex items-center text-neutral-900 text-xl font-oswald uppercase gap-2'>
                    <Icons.Menu />
                    {strings.dropdown.settings}
                </span>
            </div>

            <div className='hidden group-hover:flex flex-col w-36 text-sm md:text-lg bg-white transition-all'>
                <button className='w-full flex items-center justify-between text-neutral-900 hover:bg-neutral-100 font-oswald uppercase px-2 py-1' onClick={toggleTheme}>
                    {theme === 'dark' ? <Icons.SunAlt /> : <Icons.Sun />}
                    <span className='pl-2'>
                        {theme === 'dark' ? strings.dropdown.lightMode : strings.dropdown.darkMode}
                    </span>
                </button>
                <button className='w-full flex items-center justify-between text-neutral-900 hover:bg-neutral-100 font-oswald uppercase px-2 py-1 ' onClick={toggleLanguage}>
                    <Icons.Sort />
                    <span className='pl-2'>
                        {language === 'en' ? 'Español' : 'English'}
                    </span>
                </button>
            </div>
        </section>
    )
}
