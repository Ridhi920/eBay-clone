"use client";

import MainLayout from "../layouts/MainLayout";
import SimilarProducts from "../components/SimilarProducts";
import CartItem from "@/app/components/CartItem"
import ClientOnly from "../components/ClientOnly";
import { useRouter } from "next/navigation";
import { useCart } from "../context/cart";
import { useEffect } from "react";
import useIsLoading from "../hooks/useIsLoading";

export default function Cart() {

    const router = useRouter()
    const cart = useCart()

    useEffect(() => {
        useIsLoading(true)
        cart.getCart()
        cart.cartTotal()
        useIsLoading(false)
    }, [cart])

    const goToCheckout = () => {
        if (!cart.cartTotal()) {
            alert("You don't have any items in the cart.")
            return
        }
        router.push('/checkout')
    }


    // const product = {
    //     id: 1,
    //     title: "First Product",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //     url: "https://picsum.photos/10/8",
    //     price: 100000
    // }


    return (
        <>
            <MainLayout>

                <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                    <div className="text-2xl font-bold my-4 ">Shopping Cart </div>
                    <div className="relative flex items-baseline justify-between gap-2">
                        <ClientOnly>
                            <div className="w-[65%]">
                                {cart.getCart().map(product => (
                                    <CartItem key={product.id} product={product} />
                                ))}
                            </div>
                        </ClientOnly>
                       
              <div id="GoToCheckout" className="md:w-[33%] absolute top-0 right-0 m-2">
                  <ClientOnly>
                      <div className="bg-white p-4 border">
                          
                          <button 
                            onClick={() => goToCheckout()} 
                            className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4"
                          >
                              Go to checkout
                          </button>

                          <div className="flex items-center justify-between mt-4 text-sm mb-1">
                              <div>Items ({cart.getCart().length})</div>
                              <div>£{(cart.cartTotal() / 100).toFixed(2)}</div>
                          </div>
                          <div className="flex items-center justify-between mb-4 text-sm">
                              <div>Shipping:</div>
                              <div>Free</div>
                          </div>

                          <div className="border-b border-gray-300"/>

                          <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                              <div>Subtotal</div>
                              <div>£{(cart.cartTotal() / 100).toFixed(2)}</div>
                          </div>
                      </div>
                  </ClientOnly>
              </div>
            </div>
          </div>

                <SimilarProducts />
            </MainLayout>
        </>
    )
}