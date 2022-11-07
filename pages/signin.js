import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "../components/misc/ButtonPrimary";
// import {motion} from "framer-motion";
// import getScrollAnimation from "../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

export default function Signin() {
  
  return (
    <div>
        
          <ButtonPrimary>
            <Link href="/main/articleWriter">
              Sign in
            </Link>
          </ButtonPrimary>
        
    </div>
  );
}

