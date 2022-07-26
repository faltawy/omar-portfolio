import { FaBehance, FaHome, FaUser, FaWhatsapp } from 'react-icons/fa';
import { MdWork } from 'react-icons/md'
import { TbMessage } from 'react-icons/tb'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const socialList = [
    { link: '', variant: '#4267B2', label: 'Facebook', icon: FaFacebook },
    { link: '', variant: '#fb3958', label: 'Instagram', icon: FaInstagram },
    { link: '', variant: '#1DA1F2', label: 'Twitter', icon: FaTwitter },
    { link: '', variant: '#0077B5', label: 'Linkedin', icon: FaLinkedin },
    { link: '', variant: '#053eff', label: 'Behance', icon: FaBehance },
    { link: '', variant: '#25D366', label: 'WhatsApp', icon: FaWhatsapp },
]


export const tagList = [
    'photoshop', 'social designs',
    'photoshop', 'social designs',
    'photoshop', 'social designs',
    'photoshop', 'social designs',
]

export const VIEWS_LIST = {
    home: 'HOME',
    contact: 'CONTACT',
    about: 'ABOUT',
    projects: 'PROJECTS',
}

export const headerItems = [
    { label: 'Home', viewName: VIEWS_LIST.home, icon: <FaHome /> },
    { label: 'Contact', viewName: VIEWS_LIST.contact, icon: <TbMessage /> },
    { label: 'About', viewName: VIEWS_LIST.about, icon: <FaUser /> },
    { label: 'Projects', viewName: VIEWS_LIST.projects, icon: <MdWork /> },
]
