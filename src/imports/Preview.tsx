import imgImage from "figma:asset/6a425ffc26c07225b613b3ba08bce85dbd84a16b.png";
import imgImage1 from "figma:asset/52a7a10b983e40d91627237a4fcdc3a424a30ec1.png";
import imgImage2 from "figma:asset/af80914cd4b59c954720bd9433887ca25fe0b0a0.png";
import imgImage3 from "figma:asset/56bb552fefb050980348cb94de3ef1b8c6d582a6.png";
import imgImage4 from "figma:asset/2f9e4e0fbf90b9aea15321767d0f7c31f846e04d.png";
import imgImage5 from "figma:asset/290fa8bc337a52f36de1a1ad465fd9516e4d1ac4.png";
import imgImage6 from "figma:asset/00785f82ffc71a892a6fd7ac6f11ed257789fdd8.png";
import imgImage7 from "figma:asset/3139647cd2b54afe789ca67d728b4b77df3d55d6.png";
import imgImage8 from "figma:asset/88d2ad10b275606e70dc8eb9b8c8012405c977ac.png";
import imgImage9 from "figma:asset/00a30cae072050f23a9e25618280cfe38e34c50f.png";
import imgImage10 from "figma:asset/47a6815c16cdfab0a001fff4396feaa0489eb8f2.png";
import imgImage11 from "figma:asset/d2e57e2e082e8842685165d9704c9276ead5f56b.png";
import imgImage12 from "figma:asset/eeb0df90eae85cc10dbec38c2da57b3e0f37927c.png";

function Component01Homepage() {
  return (
    <div className="absolute contents left-[394px] top-[402px]" data-name="01_Homepage">
      <div className="absolute h-[3724px] left-[394px] top-[7850px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute h-[3724px] left-[394px] top-[4126px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute h-[3724px] left-[394px] top-[402px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Component02About() {
  return (
    <div className="absolute contents left-[3479px] top-[402px]" data-name="02_About">
      <div className="absolute h-[2920px] left-[3479px] top-[6242px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute h-[2920px] left-[3479px] top-[3322px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="absolute h-[2920px] left-[3479px] top-[402px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Component03Services() {
  return (
    <div className="absolute contents left-[6564px] top-[402px]" data-name="03_Services">
      <div className="absolute h-[3534px] left-[6564px] top-[3936px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="absolute h-[3534px] left-[6564px] top-[402px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function Component04Projects() {
  return (
    <div className="absolute contents left-[9649px] top-[402px]" data-name="04_Projects">
      <div className="absolute h-[3535px] left-[9649px] top-[3937px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <div className="absolute h-[3535px] left-[9649px] top-[402px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
    </div>
  );
}

function Component05ProjectDetails() {
  return (
    <div className="absolute contents left-[12734px] top-[402px]" data-name="05_Project Details">
      <div className="absolute h-[3156px] left-[12734px] top-[6712px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <div className="absolute h-[3155px] left-[12734px] top-[3557px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
      <div className="absolute h-[3155px] left-[12734px] top-[402px] w-[2880px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
    </div>
  );
}

export default function Preview() {
  return (
    <div className="bg-[#393939] relative size-full" data-name="Preview">
      <Component01Homepage />
      <Component02About />
      <Component03Services />
      <Component04Projects />
      <Component05ProjectDetails />
    </div>
  );
}