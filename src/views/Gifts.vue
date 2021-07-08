<template>
  <div class="gifts">
    <h1>Hola ...</h1>
    <div>
      <img class="klikcoins" src="@\assets\klikcoin.png" alt="klikcoin" />
      <p>--- KlikCoins</p>
    </div>
    <div class="card-deck">
      <div class="card rounded d-flex flex-row align-items-center m-5 cardpremio">
        <img class="premios d-inline-flex" src="@\assets\amazon.png" alt="Card image" />
        <div class="card-body">
          <h5 class="card-title">1 mes de Amazon Prime</h5>
          <img class="klikcoins" src="@\assets\klikcoin.png" alt="klikcoin" />
          <p class="card-text">
            500.000 KlikCoins
          </p>
          <button type="button" class="canjear rounded">CANJEAR</button>
        </div>
      </div>
      <div class="card rounded d-flex flex-row align-items-center m-5 cardpremio">
        <img class="premios" src="@\assets\netflix.png" alt="Netflix" />
        <div class="card-body">
          <h5 class="card-title">1 mes de Netflix</h5>
          <img class="klikcoins" src="@\assets\klikcoin.png" alt="klikcoin" />
          <p class="card-text">
            800.000 KlikCoins
          </p>
          <button type="button" class="canjear rounded">CANJEAR</button>
        </div>
      </div>
      <div class="card rounded d-flex flex-row align-items-center m-5 cardpremio">
        <img class="premios" src="@\assets\aliexpress.png" alt="AliExpress" />
        <div class="card-body">
          <h5 class="card-title">10€ en AliExpress</h5>
          <img class="klikcoins" src="@\assets\klikcoin.png" alt="klikcoin" />
          <p class="card-text">
            500.000 KlikCoins
          </p>
          <button type="button" class="canjear rounded">CANJEAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.klikcoins {
  width: 30px;
  height: 30px;
}

.premios {
  width: 200px;
  height: 200px;
  margin: 20px;
}

.canjear {
  background-color:#4A483F;
  color: #A4EBF3;
}

.cardpremio {
  border: 4px solid #A4EBF3;
}
</style>
