function menu(x) {
    //alterando barra burger
    x.classList.toggle("change");

    //exibindo itens dropdown
    document.getElementById("menu-dropdown").classList.toggle("show");

    // fechando dropdown caso clique fora do mesmo
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
             }
        }
     }
  }
  