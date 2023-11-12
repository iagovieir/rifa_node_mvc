function GetWin(){
    // Defina a data final da contagem regressiva (10 segundos a partir do momento da carga)
    const endDate = new Date().getTime() + 5000; // 10 segundos
  
    // Atualize a contagem regressiva a cada segundo
    const interval = setInterval(function () {
      const now = new Date().getTime();
      const distance = endDate - now;
  
      // Calcule os minutos e segundos
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Exiba a contagem regressiva na div
      document.getElementById('countdown').innerHTML = `${seconds}s`;
      // Se o temporizador atingir 0, pare a contagem regressiva
      if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = `Parabéns, o Sorteado é: `;
        document.getElementById('sort').style.display = "flex"
      }
    }, 1000); // Atualize a cada segundo
  };
  