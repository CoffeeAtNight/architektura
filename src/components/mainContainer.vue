<template>
    <div class="wrapper flex flex-col bg-blue-100 border-solid rounded-t-md shadow-xl pb-6 overflow-hidden">
        <div class="mb-6 bg-blue-500 py-6 shadow-lg">
            <p class="text-center font-bold text-xl text-white">Symulator działania procesora Intel 8086</p>
        </div>
        <div class= "flex px-6">
        <section>
            <div class="md:flex md:items-center mb-6">
                <div>
                <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                    AX
                </label>
                </div>
                <div >
                <input v-model="axValue" class="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div>
                <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                    BX
                </label>
                </div>
                <div >
                <input v-model="bxValue" class="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div>
                <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                    CX
                </label>
                </div>
                <div >
                <input v-model="cxValue" class="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div>
                <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                    DX
                </label>
                </div>
                <div >
                <input v-model="dxValue" class="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" >
                </div>
            </div>
        </section>
        <section class="pl-10 ml-5 flex flex-col justify-center">
            <div class="inline-block relative w-64 flex items-center mb-6">
                <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                   ROZKAZ
                </label>
                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>MOV</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            <div class="inline-block relative w-64 flex items-center mb-6">
                <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                   Parametr 1
                </label>
                <select v-model="par1" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="">--Wybierz --</option>
                    <option>ax</option>
                    <option>bx</option>
                    <option>cx</option>
                    <option>dx</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            <div class="inline-block relative w-64 flex items-center">
                <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                   Parametr 2
                </label>
                <select v-model="par2" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                     <option value="">--Wybierz --</option>
                    <option>ax</option>
                    <option>bx</option>
                    <option>cx</option>
                    <option>dx</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </section>
        </div>
        <div class="flex justify-center">
        <button @click="startSymulation" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded">
         Rozpocznij symulację
        </button>
        </div>
       
    </div>
</template>

<script>
export default {
  data() {
    return {
      axValue: "0",
      bxValue: "0",
      cxValue: "0",
      dxValue: "0",
      par1: "",
      par2: ""
    };
  },
  methods: {
    startSymulation() {
      //Walidacja poprawności parametrów
      if (this.par1 && this.par2 && this.par1 !== this.par2) {
        //Sprawdźmy czy wartości dają się przekonwertować na hex
        // krok 1 konwertujemy:
        let valA = parseInt(this.axValue, 16);
        let valB = parseInt(this.bxValue, 16);
        let valC = parseInt(this.cxValue, 16);
        let valD = parseInt(this.dxValue, 16);
        //Krok 2 sprawdzamy, czy wychodzi NaN (to oznacza niepoprawną liczbę w zapisie hex):
        if (isNaN(valA) || isNaN(valB) || isNaN(valC) || isNaN(valD)) {
          console.log("Nie można przekonwertować wartości");
        } // Jeżeli nie jest NaN, sprawdzamy czy nie wychodzi poza FFFF
        else if (valA > 65535 || valB > 65535 || valC > 65535 || valD > 65535) {
          console.log("Liczba większa niż FFFF");
        } else {
          //Jeżeli parametry były poprawne można działać!!!!!!!!!!!!!!!!!!!!!!!!.
          // ax jako parametr2
          if (this.par2 === "ax" && this.par1 === "bx")
            this.bxValue = this.axValue;
          else if (this.par2 === "ax" && this.par1 === "cx")
            this.cxValue = this.axValue;
          else if (this.par2 === "ax" && this.par1 === "dx")
            this.dxValue = this.axValue;
          // bx jako parametr 2
          if (this.par2 === "bx" && this.par1 === "ax")
            this.axValue = this.bxValue;
          else if (this.par2 === "bx" && this.par1 === "cx")
            this.cxValue = this.bxValue;
          else if (this.par2 === "bx" && this.par1 === "dx")
            this.dxValue = this.bxValue;
          //  c jako parametr 2
          if (this.par2 === "cx" && this.par1 === "ax")
            this.axValue = this.cxValue;
          else if (this.par2 === "cx" && this.par1 === "bx")
            this.bxValue = this.cxValue;
          else if (this.par2 === "cx" && this.par1 === "dx")
            this.dxValue = this.cxValue;
          //  d jako parametr 2
          if (this.par2 === "dx" && this.par1 === "ax")
            this.axValue = this.dxValue;
          else if (this.par2 === "dx" && this.par1 === "bx")
            this.bxValue = this.dxValue;
          else if (this.par2 === "dx" && this.par1 === "cx")
            this.cxValue = this.dxValue;
        }
      } else {
        //Błędy parametrów.
        console.log("Wystąpił błąd z parametrami.");
      }
    }
  }
};
</script>

<style lang="css" scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>