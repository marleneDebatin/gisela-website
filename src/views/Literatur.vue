<template>
  <div class="literatur">
    <div class="page col-12">
        <div class="container">
            <div class="row">
                <div class="cover col-6">
                    <img src="../assets//Wassilli Cover.jpg">
                </div>
                <div class="description col-6">
                    <h3 class="subtitle">
                        Historischer Roman
                    </h3>
                    <h2>
                        Kater Wassili und Peter der Große
                    </h2>
                    <div class="blurb">
                        <p>
                            Der Legende nach brachte Peter der Große den Kater Wassili von Westeuropa nach Russland mit. Der Kater erzählt aus dem Leben Peters in Holland, England, Österreich und Russland in der Zeit von 1697 bis 1718.
                        </p>
                        <p>
                            Als junger Kater lebt er mit Peter und seinen Freunden in einem einfachen Holzhaus in Zaandam. Wassili begleitet den Zar auf die Werft nach Amsterdam und segelt als Schiffskater mit ihm nach England. Sie verbringen eine für beide wichtige Zeit auf einem herrschaftlichen Anwesen in London. Wassili lernt dort die Katze Wanda kennen.
                        </p>
                        <p>
                            Wassili und Wanda segeln mit Peters Freund in die Hafenstadt Archangelsk im nördlichen Russland, während Peter mit seinem Gefolge nach Wien reist.
                        </p>
                        <p>
                            Als Zar Peter nach Russland zurückkehrt trifft er Wassili und Wanda wieder. Von nun an begleitet Wassili den Zaren auf vielen Reisen durch das große russische Reich bis ans Schwarze Meer.
                        </p>
                        <p>
                            Während des Krieges zwischen Russland und Schweden wird Wassili auf ein schwedisches Boot verschleppt. Zusammen mit dem Matrosen Gunnar gerät er in russische Gefangenschaft und begegnet in Moskau dem Zaren wieder.
                        </p>
                        <p>
                            Er reist mit Zar Peter zu den eroberten Gebieten an der Ostsee und erlebt die Entstehung der Stadt St. Petersburg. Auf den Segelschiffen des Zaren dient er lange als Schiffskater. Später erhält er die Aufgabe, die Kunstsammlungen Peters vor Mäusen, Ratten und Dieben zu schützen.
                        </p>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button type="button" class="btn btn-outline-dark">Auf Amazon kaufen</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-dark">Bei BoD kaufen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Literatur'
}
</script>

<style scoped>
.row {
    padding-top: 30px;
    
}
.cover {
    display: flex;
    justify-content: center;
}
img {
    height: 80vh;
    width: auto;;
}
.subtitle {
    color: gray;
    font-size: 23px;
    font-weight: 400;
}
p {
    margin-bottom: 8px;
    text-align: justify;
}
button {
    width: 100%;
    margin: 0px 5px;
}

</style>