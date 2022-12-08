import {
  MyEllipse,
  MyHero,
  MyHeroText,
  MyPAboutMe,
  MySecondEllipse,
  MyblurdEllipse,
  MySecondBlurdEllipse,
} from "./style.Hero";

export default function index() {
  return (
    <div>
      <MyHero>
        <MyHeroText>“Se Foi imaginado, pode ser criado.”</MyHeroText>
        <MyEllipse />
        <MySecondEllipse />
        <MyPAboutMe>Rafael Gomes Desenvolvedor Full Stack</MyPAboutMe>
        <MyblurdEllipse />
        <MySecondBlurdEllipse />
      </MyHero>
    </div>
  );
}
