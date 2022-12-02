import {
  MyEllipse,
  MyHero,
  MyHeroText,
  MyPAboutMe,
  MySecondEllipse,
} from "./style.Hero";

export default function index() {
  return (
    <div>
      <MyHero>
        <MyHeroText>“Se Foi imaginado, pode ser criado.”</MyHeroText>
        <MyEllipse />
        <MySecondEllipse />
        <MyPAboutMe>Rafael Gomes Desenvolvedor Full Stack</MyPAboutMe>
      </MyHero>
    </div>
  );
}
