import { useEffect } from "react";
import { usePathname } from 'next/navigation';

const InitMenu = () => {
    const pathname = usePathname();

    useEffect(() => {

        const sidebarMenu = document.querySelectorAll('.nextra-sidebar-container ul.nextra-menu-desktop li');
        [].slice.call(sidebarMenu).forEach((node: any) => {
            const curLink = node.querySelector('a');
            if (curLink !== null) {
                const link = node.querySelector('a').getAttribute('href');
                if (link === pathname) {
                    node.classList.add('active');
                    curLink.className = 'nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-bg-primary-100 nx-font-semibold nx-text-primary-800 dark:nx-bg-primary-400/10 dark:nx-text-primary-600 contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500';
                } else {
                    node.classList.remove('active');
                    curLink.className = 'nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-400 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50';
                }
            }
        });
        
    }, []);
    return null;
}

export default InitMenu;
