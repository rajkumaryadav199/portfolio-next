import { motion } from "framer-motion";
import Link from "next/link"
import { usePathname } from "next/navigation";

const Navbar = ({containerStyles, linkStyles,underlineStyles}) => {
    const links = [{path:'/', name:'Home'},
    {path:'/projects', name:'My projects'},
    {path:'/contact', name:'Contact'}];

    const path = usePathname();
    console.log("path", path,underlineStyles);
  return (
    <nav className={`${containerStyles}`}>
        {links.map((item, i)=>{
            return <Link 
            href={item.path} 
            key={i}
            className={`relative capitalize ${linkStyles}`}>

            {links.path === path && (<motion.span 
            initial={{y:'-100%'}}
            animate={{y:0}}
            transition={{type:'tween'}}
            layoutId='underline'
            className='absolute left-8 top-full h-[2px] bg-primary w-full'
             />) }
            {item.name}
            </Link>})
            }
    </nav>
  )
}
export default Navbar
