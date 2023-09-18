"use client";
import Image from 'next/image'
import MainLayout from './layouts/MainLayout';
import CarouselComp from './components/CarouselComp'
import Product from './components/Product';
import { useEffect, useState } from 'react';
import useIsLoading from './hooks/useIsLoading';



export default function Home() {

  const [products, setProducts] = useState([])

  const getProducts = async() => {
    // useIsLoading(true)

    const response = await fetch('/api/products')
    const prods = await response.json()

    setProducts([])
    setProducts(prods)
    useIsLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])


  // const products = [
  //   {
  //     id:1,
  //     title: "First Product",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     url: "https://picsum.photos/200/300",
  //     price: 100000

  //   },
  //   {
  //     id:2,
  //     title: "Second Product",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     url: "https://picsum.photos/200/300",
  //     price:200000

  //   },
  //   {
  //     id:3,
  //     title: "Third Product",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     url: "https://picsum.photos/200/300",
  //     price:200000

  //   },
  //   {
  //     id:4,
  //     title: "Fourth Product",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     url: "https://picsum.photos/200/300",
  //     price:200000

  //   },
  //   {
  //     id:5,
  //     title: "Fifth Product",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     url: "https://picsum.photos/200/300",
  //     price:200000

  //   }
  // ]


  return (
    <MainLayout>
      <CarouselComp />

      <div className='max-w-[1200px] mx-auto'>
        <div className='text-2xl font-bold mt-4 mb-6 px-4'>Products </div>
        <div className='grid grid-cols-5 gap-4'>
            {
              products.map(product => (
                <Product key={product.id} product={product}/>
              ))
            }

        </div>

      </div>


    </MainLayout>
  )
}
