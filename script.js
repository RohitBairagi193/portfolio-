
function searchFun() {
    let searchInput = document.getElementById("searchbar").value;
  
    switch (searchInput.toLowerCase()) {
        case "education":
        window.location.href = "index.html#edu"; 
            break;
          case "about":
            window.location.href = "index.html#about";
            break;
            case "home":
            window.location.href = "index.html#logo";
            break;
            case "hobbies":
                window.location.href = "index.html#hobb"; 
                break;
                case "skills":
                    window.location.href = "index.html#Skills";
                    break;
                    case "form":
                    window.location.href = "index.html#survey";
                    break;
                    case "contact":
                        window.location.href = "index.html#con";
                        break;
                   

    }
}

