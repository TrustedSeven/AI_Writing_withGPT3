import Layout from '../../components/Layout/Layout';
import Mainlayout from '../../components/Main/mainlayout';
import Link from 'next/link';
import ButtonOutline from '../../components/misc/ButtonOutline.';


export default function aiWriter() {
  
  return (
    <div>
            <ButtonOutline><Link href="/Article">Article</Link></ButtonOutline>
            <ButtonOutline><Link href="/Translator">Translator</Link></ButtonOutline>
            <ButtonOutline><Link href="/Blog">Blog</Link></ButtonOutline>
            <ButtonOutline><Link href="/">Back</Link></ButtonOutline>
    </div>
  );
}