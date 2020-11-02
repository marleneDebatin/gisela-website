<template>
    <div class="literatur">
        <div class="page col-12">
            <div class="container">
                <div class="row">
                    <div class="left-side col-5">
                        <div class="cover">
                            <img src="../assets//Wassilli Cover.jpg" />
                        </div>
                        <div class="isbn">
                            <p>
                                <span class="isbn-title">ISBN-13: </span>
                                <span>9783751951425</span>
                            </p>
                            <p>172 Taschenbuchseiten</p>
                        </div>
                    </div>
                    <div class="description col-7">
                        <h3 class="subtitle">HISTORISCHER ROMAN</h3>
                        <h1>Kater Wassili und Peter der Große</h1>
                        <div class="blurb">
                            <p>
                                Der Legende nach brachte Peter der Große den
                                Kater Wassili von Westeuropa nach Russland mit.
                                Der Kater erzählt aus dem Leben Peters in
                                Holland, England, Österreich und Russland in der
                                Zeit von 1697 bis 1718.
                            </p>
                            <p>
                                Als junger Kater lebt er mit Peter und seinen
                                Freunden in einem einfachen Holzhaus in Zaandam.
                                Wassili begleitet den Zar auf die Werft nach
                                Amsterdam und segelt als Schiffskater mit ihm
                                nach England. Sie verbringen eine für beide
                                wichtige Zeit auf einem herrschaftlichen Anwesen
                                in London. Wassili lernt dort die Katze Wanda
                                kennen.
                            </p>
                            <p>
                                Wassili und Wanda segeln mit Peters Freund in
                                die Hafenstadt Archangelsk im nördlichen
                                Russland, während Peter mit seinem Gefolge nach
                                Wien reist.
                            </p>
                            <p>
                                Als Zar Peter nach Russland zurückkehrt trifft
                                er Wassili und Wanda wieder. Von nun an
                                begleitet Wassili den Zaren auf vielen Reisen
                                durch das große russische Reich bis ans Schwarze
                                Meer.
                            </p>
                            <p>
                                Während des Krieges zwischen Russland und
                                Schweden wird Wassili auf ein schwedisches Boot
                                verschleppt. Zusammen mit dem Matrosen Gunnar
                                gerät er in russische Gefangenschaft und
                                begegnet in Moskau dem Zaren wieder.
                            </p>
                            <p>
                                Er reist mit Zar Peter zu den eroberten Gebieten
                                an der Ostsee und erlebt die Entstehung der
                                Stadt St. Petersburg. Auf den Segelschiffen des
                                Zaren dient er lange als Schiffskater. Später
                                erhält er die Aufgabe, die Kunstsammlungen
                                Peters vor Mäusen, Ratten und Dieben zu
                                schützen.
                            </p>
                        </div>
                        <p class="available">
                            Als Taschenbuch und als eBook erhältlich. Kann in
                            allen Buchhandlungen bestellt werden.
                        </p>
                        <div class="row buttons">
                            <div class="col">
                                <button
                                    type="button"
                                    class="btn btn-outline-dark"
                                    href="https://www.amazon.de/Kater-Wassili-Peter-Gro%C3%9Fe-Historischer/dp/3751951423"
                                >
                                    Auf Amazon kaufen
                                </button>
                            </div>
                            <div class="col">
                                <button
                                    type="button"
                                    class="btn btn-outline-dark"
                                    href="https://www.bod.de/buchshop/kater-wassili-und-peter-der-grosse-gisela-debatin-9783751951425https://www.bod.de/buchshop/kater-wassili-und-peter-der-grosse-gisela-debatin-9783751951425"
                                >
                                    Bei BoD kaufen
                                </button>
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
    name: "Literatur",
};
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
    width: auto;
    /* box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1); */
    box-shadow: 0px 35px 70px -35px rgba(0, 0, 0, 0.6);
}
.subtitle {
    /* color: #424242; */
    color: #343a40;
    font-size: 1.2rem;
    /* font-weight: 500; */
	font-weight: 600;
	/* color: #757575; */
}
p {
    margin-bottom: 8px;
    font-family: "Roboto";
    color: #343a40;
    font-size: 0.9rem;
}
button {
    width: 100%;
    margin: 0px 5px;
    font-weight: 600;
    color: #494949 !important;
    border-radius: 0px;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 15px;
    border: 3px solid #494949 !important;
    display: inline-block;
    transition: all 0.4s ease 0s;
}
button:hover {
    color: #ffffff !important;
    background: #212121;
    border-color: #212121 !important;
    transition: all 0.4s ease 0s;
}
.buttons {
    margin-bottom: 3rem;
}
.description {
    padding: 0px 40px;
}
h1 {
    font-family: "Playfair Display", serif;
    font-weight: 800;
    font-size: 2.5rem;
    padding: 10px 0px 20px 5px;
}
.available {
    margin-top: 15px;
    color: grey;
    font-size: 0.95rem;
}
p {
    color: #616161;
    font-family: "Open Sans";
}
.isbn-title {
    /* color: #343a40; */
	font-weight: 700;
	color: #757575;
}
.isbn {
    margin-top: 1.5rem;
    justify-items: center;
}
</style>