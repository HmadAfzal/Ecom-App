"use client"
import SearchResult from '@/components/SearchResult';
import { useSupabase } from '@/lib/supabase/useSupabase';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
  const {filteredProducts,getFilteredProducts}=useSupabase();
const params=useParams();
const query=params.query.toString()
useEffect(()=>{
getFilteredProducts(query);
},[])


  return (
    <div>
     <SearchResult filterData = {filteredProducts}/>
    </div>
  )
}

export default page
