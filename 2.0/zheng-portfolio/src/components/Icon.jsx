import "./Icon.css";

export default function Icon({ name, height, linked=true, displayInTextIfNoIcon=false }) {
    let iconSrc;
    let iconLink;

    switch (name) {
        case "HTML":
            iconSrc = "/images/icons/html.svg";
            iconLink = 'https://developer.mozilla.org/en-US/docs/Web/HTML';
            break;
        case "CSS":
            iconSrc = "/images/icons/css.svg";
            iconLink = 'https://developer.mozilla.org/en-US/docs/Web/CSS';
            break;
        case "JavaScript":
            iconSrc = "/images/icons/js.svg";
            iconLink = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
            break;
        case "React":
            iconSrc = "/images/icons/react.svg";
            iconLink = 'https://reactjs.org/';
            break;
        case "jQuery":
            iconSrc = "/images/icons/jquery.svg";
            iconLink = 'https://jquery.com/';
            break;
        case "C#":
            iconSrc = "/images/icons/csharp.svg";
            iconLink = 'https://learn.microsoft.com/en-us/dotnet/csharp/';
            break;
        case "C++":
            iconSrc = "/images/icons/cpp.svg";
            iconLink = 'https://isocpp.org/';
            break;  
        case "PHP":
            iconSrc = "/images/icons/php.svg";
            iconLink = 'https://www.php.net/';
            break;
        case "Java":
            iconSrc = "/images/icons/java.svg";
            iconLink = 'https://www.java.com/';
            break;
        case "MySQL":
            iconSrc = "/images/icons/mysql.svg";
            iconLink = 'https://www.mysql.com/';
            break;
        case "Visual Studio":
            iconSrc = "/images/icons/visualstudio.svg";
            iconLink = 'https://visualstudio.microsoft.com/';
            break;
        case "VS Code":
            iconSrc = "/images/icons/vscode.svg";
            iconLink = 'https://code.visualstudio.com/';
            break;
        case "Unity":
            iconSrc = "/images/icons/unity.svg";
            iconLink = 'https://unity.com/';
            break;
        case "OpenGL":
            iconSrc = "/images/icons/opengl.svg";
            iconLink = 'https://www.opengl.org/';
            break;
        case "Box2D":
            iconSrc = "/images/icons/box2d.svg";
            iconLink = 'https://box2d.org/';
            break;
        case "SFML":
            iconSrc = "/images/icons/sfml.svg";
            iconLink = 'https://www.sfml-dev.org/';
            break;
        case "PixiJS":
            iconSrc = "/images/icons/pixijs.svg";
            iconLink = 'https://pixijs.com/';
            break;
        case "MonoGame":
            iconSrc = "/images/icons/monogame.svg";
            iconLink = 'https://www.monogame.net/';
            break;
        case "Maya":
            iconSrc = "/images/icons/maya.svg";
            iconLink = 'https://www.autodesk.com/products/maya/overview';
            break;
        case "Bootstrap":
            iconSrc = "/images/icons/bootstrap.svg";
            iconLink = 'https://getbootstrap.com/';
            break;
        case "Ant Design":
            iconSrc = "/images/icons/antdesign.svg";
            iconLink = 'https://ant.design/';
            break;
        case "Material UI":
            iconSrc = "/images/icons/material-ui.svg";
            iconLink = 'https://mui.com/';
            break;
        case "jQuery UI":
            iconSrc = "/images/icons/jquery-ui.svg";
            iconLink = 'https://jqueryui.com/';
            break;
        case "Semantic UI":
            iconSrc = "/images/icons/semantic-ui.svg";
            iconLink = 'https://semantic-ui.com/';
            break;
        case "Git":
            iconSrc = "/images/icons/git.svg";
            iconLink = 'https://git-scm.com/';
            break;
        case "GitHub":
            iconSrc = "/images/icons/github.svg";
            iconLink = 'https://github.com/';
            break;
        case "Figma":
            iconSrc = "/images/icons/figma.svg";
            iconLink = 'https://www.figma.com/';
            break;
        case "Trello":
            iconSrc = "/images/icons/trello.svg";
            iconLink = 'https://trello.com/';
            break;
        case "NPM":
            iconSrc = "/images/icons/npm.svg";
            iconLink = 'https://www.npmjs.com/';
            break;
        case "FlutterFlow":
            iconSrc = "/images/icons/flutterflow.svg";
            iconLink = 'https://www.flutterflow.io/';
            break;
        case "ASP.NET MVC":
            iconSrc = "/images/icons/asp-dot-net.svg";
            iconLink = 'https://dotnet.microsoft.com/en-us/apps/aspnet';
            break;
        case "Flutter":
            iconSrc = "/images/icons/flutter.svg";
            iconLink = 'https://flutter.dev';
            break;
        case "Flame":
            iconSrc = "/images/icons/flame.png";
            iconLink = 'https://flame-engine.org';
            break;
        case "DirectX 11":
            iconSrc = "/images/icons/directx11.png";
            iconLink = 'https://www.microsoft.com/en-us/download/details.aspx?id=17431';
            break;
        case "Dart":
            iconSrc = "/images/icons/dart.svg";
            iconLink = 'https://dart.dev';
            break;
        // Add more cases for different icons as needed
        default:
            iconSrc = null;
    }

    if (iconSrc == null) {
        if (displayInTextIfNoIcon) return (
            <>
                <span className="text-icon">{name}</span>
            </>
        )
        return (<></>);
    }
    return (
        <>
            <a href={iconLink} target="_blank" className={!linked ? 'disabled-icon' : ''}>
                <img src={iconSrc} alt={name} height={height} className='icon'></img>
            </a>
        </>
    );
}