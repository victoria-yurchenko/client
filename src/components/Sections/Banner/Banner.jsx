import { Icon } from '@iconify/react'
import React from 'react'

export default function Banner() {
    return (
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-xs-6">
                        <div class="shop">
                            <div class="shop-img">
                                <img height='200' width='200' src="https://img.kytary.com/eshop_ie/velky_v2/na/637587725633400000/a86485b6/64867053/jet-guitars-js-300-sfg.jpg" alt=""/>
                            </div>
                            <div class="shop-body">
                                <h3>Guitar<br/>Collection</h3>
                                <a href="#" class="cta-btn">Shop now <i><Icon icon="fa:arrow-circle-right"/></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-xs-6">
                        <div class="shop">
                            <div class="shop-img">
                                <img  height='200' width='200' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagUM4AYdNCGq9DqVKx_ZImkgIafBsNZBU7Q&usqp=CAU" alt=""/>
                            </div>
                            <div class="shop-body">
                                <h3>Piano<br/>Collection</h3>
                                <a href="#" class="cta-btn">Shop now <i><Icon icon="fa:arrow-circle-right"/></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-xs-6">
                        <div class="shop">
                            <div class="shop-img">
                                <img  height='200' width='200' src="https://www.drumbazar.net/media/catalog/product/cache/52836d5eb74e48d409889e4eb0cae335/s/1/s13h30_main_1.jpg" alt=""/>
                            </div>
                            <div class="shop-body">
                                <h3>Percussion<br/>Collection</h3>
                                <a href="#" class="cta-btn">Shop now <i><Icon icon="fa:arrow-circle-right"/></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
