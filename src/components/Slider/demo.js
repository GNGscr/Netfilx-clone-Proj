import { Description } from "../SliderMovies/SliderMovies.styles";

// const items = [
//     a,
//     b,
//     c,
//     d,
//     e,
//     f,
//     g,
//     h,
//     i,
// ]




// function next(){

// }
// function back(){
    
// }

// // import React, { Component } from 'react';
// // import '../../styled/App.css';
// // // import NavBar from '../Global/NavBar'
// // // import LogoAndText from './Logo_and_text/Logo_and_text';

// // // import NavBar from '../Global/NavBar';
// // // import Links from '../Global/Links';
// // import {
// //   Wrapper, PageHead, Sliderer, SliderMask, SliderItem,
// //    SliderItemInner, IMG, LeftArrow, RightArrow, 
// //    RightArrowIMG, LeftArrowIMG
// // } from './Slider.styles'
// // // import ListItem from '../ListItem/ListItem.view'

// // const Shows = [
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABTUr6RiQz0A3_YRBKZssnF049jZdKiug6cCT4Vn6Lz0CyoyDCr_0n9-zUVVZ7C5chEGLKRT3ufE0TKitmjfoifXXOe91V6SyTD_IwU5iKepSLm4IprjX8rCLPzgSJL8eCIIW6UF_fg.jpg'}, // 1. Mowgli
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYpnH2rHc9RGS-sagro81a3NWMBcLimQQsPSLkBIhSwUxGicy8me0Rx_j9Q-W6I_HQr30gtqb-w0nq6qjxoZp8sH1T8O6MijAE6Y9XE1awNoS3y6HC8PfNFsEiG2ewRvD19JSs9xJQ.jpg'}, // 2. Ozark
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSf1IK4UXFERCh-XRQmfYmG2x8prdtM4NlWEdr9AdXR4umaJ-PQ7upiS_I2ZRt4qlxlUzUyh4AuOqueGwOerDEs_qegHLVlMo1GQWnQz-kNGw5L3gKZD-QQ78hMhVgFTTRP14Euci4M.webp'}, // 3. The 100
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVyRwN8jpve3bdT8gP2w4dbbopyzF9oaXopAhmcURTTxgyzKd5zOm1rc3Jzit8TyUSHXNCUzk8HIKGixyipz72FmvqMXkGcSLZim30awSWGASRi2ED4ENx1DmEaEW06NJxIggyP-4A.jpg'}, // 4. The Outlaw King
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABXfyzzGhJnj-RD2cILwxrdnxbf472WT-2jbRv7yhxFAjbI5b01wP5c85oGrJ1MbJR6QcGNJMgY9LcQ5CZjQunXox45puJm1sAAoTtx3Qo-ohWKpgMoHJVMCRh0izLKk2mNu55mQ_OQ.jpg'}, // 5. 13 Reasons Why
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdHJy_L_dgNv7cJkRE6s5Wt7UdajpIWtgx8jFLk52ROnZF4EsT_IEzVNL995CBWGRqaQl9sWB-N9VwvJ1cnYLoCjKd68dAADPcpKRqIZXjh4U5StQ_BrUz9l8GY82oVLJ_mTP-D8XA.jpg'}, // 6. Bad Blood
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZ3PW4KZ_T28uotvOKiygx6TZuLfMPuX4xZCcOQUm0NAg9wW4HQvg91348H8WP4Tfx4ACfNlJ1k0ccJKw6RrbFaxSSsDEf8EGyZzf10yI-vD9xc3FEDoRwfcS0ZJdrhpt8CNMALDgPg.webp'}, // 7. Peaky Blinders
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZp7kNUYfP2L2jFv1eot5NLMcLY8DRA7oxdZ7zaVm0mLylyEvjBkpwz8VJu9Zg-exgr15DZnuNl2nakMnEi4nlLuN71rXFcRVI72qAFuXrc8FLgtP57Vtx7yeuGMR85wpsC5hNqAsw.jpg'}, // 8. The Hunting of Hill House
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZkMIJryuhLk1bV5BNUZPF7N8afFSH-lNnS0-Lrthh2nyEUUW_nAAffYHWPkOAlta-JYHjnnnwcsFLtjB-B467QuqCgLtnqIko2EiENtTR-ncEsGPIJV-UISNW0SGH4H6UwNkbETZQ.jpg'}, // 9. Jessica Jones
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSvdpa2D-J11yGbwGyvOyeHMxxJN03bjKT5TZW3MYBy4t7rCGxfW1zAUQKuDw8ieSC9dSkk06CBoyhGXbQniumwV1eZIIqkbBqtoj9x825TYVbEPCqYChVSrJjHDEEZJiPUdG0oHbw.jpg'}, // 10. El Chapo
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABW4MvDo2iIzeHISS7ofv4Ra9vc5WJxX7fuBofNLh_6lDrUW1YXuR7QGc4lvbJuSyGkM7AioCUbi2BkObi8g2ExveY_SmIF7NZny5Z42i2gXQod_3b9eusldSlF9tPbXiZo9BCLFfvlA.webp'}, // 11. Rick And Morty
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQ0I-6IuNAYN-41A8p4TFnIQSMfcKZaMNB4C4GIcvScTXUdyqnKrt_djGCP5gsczu_KjISs4GHdKh1oXLO9h4M3qQHgCQLnH1xTW3cibW3-3larLLaOtXOwNtw00xalirlw6UblYkxE.webp'}, // 12. Orphan Black
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQXfOlR49LefUdn5YW-wY7qNGhWclFCMgVGBdVABjPC_VGed4j8nmccxTEgkFvT5xPH3LFTd-wHxgNjxyOk8qEf6CFfRUK3TthPN1TTQP_6UIV0uBBEAyvt8Uc2nk6uLmBjgZENshA.jpg'}, // 13. Sabrina
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABT0C-GjL6m9IJ3pEIttPWhHP9ZjworqpVqW6HbqfVh7tV7FMFfqoPWH1u59HX-nuqyfXmYI3sh8Zmaj3dBLuJFlGFC_umxK8LdMmh7u62NcKULrbKQSFnSXeDmW19stsdEE4dQAT1Us.webp'}, // 14. Elementary
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSYsDCcbwcYiM56Z8qqDiqP013qQxK8JOFSNXInvJG1x0CI2IxCRIsYG4_2_6y6e53vR7MAjSKUWX8ftYfHDGgJ59PHhCG__nO4OkbN36J33v-kSW-y2hC7CVrn51VDzyNis35wdQqQ.webp'}, // 15. Fargo
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABWKSGe0DJdv6XIV60LyY1FQWVe4bu0k0OD6M84Z68f42zP997i7DZS604Cw1Z0SqycBDweLPQrTYcFm25vILwdR7Z6XkABGK9xB0I_MiXFAyg_e56R0DVtldhdLoaC9JtFQ_0dqNhK4.webp'}, // 16. Breaking Bad
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABU_b1YhqPiGqLLTyiOEfzgnPUeXz3l5NkbVvcVF5IIzLN7czqZLsEKaWKzO8nWYDmxTHHcK4145wbgfR4IeY14rsQRM-jE_xDEWRhpZHvp2z88mzKaYOT18UGyL55-S5FHCgaBHNcrw.webp'}, // 17. Lucifer
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfH9_JnrO1cFe9L__G-EREjJpNId9DjM3zN29vMcz_lR_8Zzk__6ScCU5JGziXmKe1eUA_LoKNRNBM3EaniJ7gla7vHYmrmybB6RRsOnUulWdWXQIh5O3FmR_yQSeGEZFWG_e-0_Cw.jpg'}, // 18. Iron Fist
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABa1jNVl5zS9EYkKaG5-iQM8IV9OC5zZOHS31wGpRcbmbSHeMKPHi8z8zd2JdWR_OI2XvE_5n4xVw5GWbLhzzdgxFPIen4j5h2WLpprWQRyebjVfUdm0qu3LkDRaY2NSM2WnN10xzwJM.webp'}, // 19. Suits
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRjPjcb21hLzbvqbfdPqgTYTh_A2cR_p8GJuswyfn48rY3byQA_1ZR0iwyLz0_nRI8BnrfK5PBqerR80fwToX82QzYxliI5fgkQjvaNULyduenGwOLWCpw8tK8Hkxio-Q5q79Gagw98.webp'}, // 20. That 70's Show
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVjucf3WXxze3I-2S64wUucA3o0bPcmCaf5iHD6runOiVQH-R630-0lQdyY0urwfs_NiPZHtnmN4hZ9KtVi6RszaGWFXMlZONAqtvbk23qAoxON7PbFkJspxoy6nw_2a9HuqKI8tcA.jpg'}, // 21. How it Ends
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdqOPTMs7cBF19NQbuFRjF0k4XYVJR7b08Tr9jH8Y7jpfo-rXM3NuhpxNzfzuDH7wFvSd9rvYeNyIUMSyUYRF-5L_Q6fxgGlIUvtCOLJGcxtsJUiVuqaRr6eHzXo5Pwir3csBy_gk3k.webp'}, // 22. Ray Donovan
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABZprnerfU6fd9-q8-qhnOJQ2oRmByeRJEiuJqdH8egoBd1gJavifpTznhkNxnX0Zln2_-yt1bJcmhClWLuJgGnAtf0pX7D7Knr3SO2FvaoabjyoS-vT8Zl34Ohr8hzI2YOgrr66bqSIw-uK3L540pmOUH-HDSVFNQJSoh-qm0mo6bFvLIS7G7233qdgt64P-KPkUw-mq7fg.webp'}, // 23. Vikings
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABf1FFGztq14qWA9yN4ZlO7G2xhyar7e4aHcqrJittowTyIViuRWPe4494Mt-0TYVfY3tkgs3KIi7gAyTDchiWozYYy96SfLMljnTk4B0xS9_HT3NjSjnH5HiOFK7-psz9HKtHaKNUA.jpg'}, // 24. Joe Rogen Stranger Times
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbG_hmCN4NTbL3iECf93sz_wyU9w_HfC7-1jlUHxl_ZVWfL8SAxHV5y8JAxA8r-whmXGjKT6HXIbMkeXj-OgWyQETjidYBoQp9-gMM8ZulsUGCdLcgpVNZfr7EjdOJYyIj3wJQXqqQ.jpg'}, // 25. Bumping Mics
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABX2qfo3zMLrLT0XXtqTCCL91dc1Ovb3M3sG8AajkPNeiNwpOUthvpdfcEtwtLUHHnM9lu1VXVgPD6TM9CiquawLm4mq_ljcahkedojZJmXfCOLw2xFW4SVLcjIJhGs0MRsvebCKlLg.jpg'}, // 26. Manhunt Unabomber
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABf85MBfa1k4bFEVfSI7CNfVr8Qt7ZUuKtMAvD-66e9MKtqNEW2UkzxMTYzXftDqJZEFN3bHr44SdwcMBaVQzbVh2G0X1kaRRpFjMhA0pMnavHskfUaGrJJTcyHcpb-aAIn9U_iBfNHI.webp'}, // 27. Friends
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABY4Wbb_z0I6rLno48JCoD2fZKq3WYftOZ9uDe0Ke4dCl0LtOEbdDSdjNT2jtvuDQco56gxtu7xDMIGMNWNDHyCW_ise7SVDEmKDSL1yxa_ntqVGtkb68BCn8vPrle4fPBqSX9oRHfvs.webp'}, // 28. Weeds
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSKo5prcsQpChpCkKhg0re6YI2ggixpgWsiNmaiBJUrZms1zxmRaWVprnkidd6rkQ_Km0VZEJYm9CZcYHVdJcCDQ6PANIwC2_7kIwxdUgAdcwKA-RiHM45QGGsJQQgHgVpZ27Y6sG1U.webp'}, // 29. Pineapple Express
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABa96lsLLabBWHi5vLLCtB9W7ff9jqmhzd8jBAMbnaIJTiu98ceMu_k0gX_B-buJcJDqrsaBoHWCVIk3JkjviKcQFIOuVZSqUbISTsT_epOdx0dKd9G7UM_FYKKPaxxFCwOFha7bDqEc.webp'}, // 30. Dexter
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABb5w6LPFkUf6_HPzZzokf9NWn7SNAIY9FOTAXtLLrlfDz_T7iIuIzxRIXvbMPHxAovTXnKHKjxBWVzZSWpyv0OZswm0Js2q6pGuqIdpG_mDL5JWfPnOfTiR6DMqoQsSJfvZxrl05cg.jpg'}, // 31. Death By Magic
// //   {art:'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABc9Gv3D91VVesqZS2SLNhcjwW3W3f4hP2KGcIsZOWKqbdkZmzB5_1fCGbTjpyEmgKXLu-xQQF8_wljnNr929bl_bV8IlEKl9ypNDlSHcyLC7fFUNYPR_ox7gcCySzbGDhl5ti-4fKz8.webp'}, // 32. Moana
// // ];

// // class Slider extends Component {

// //   constructor (props) {
// //     super(props);
// //     this.handleOnLeftArrowClick = this.leftArrowClick.bind(this);
// //     this.handleOnRightArrowClick = this.rightArrowClick.bind(this);
// //     this.state = {
// //       original_list:[],
// //       displayed_list:[],
// //       profile_data: {},
// //       moving: false,
// //       mv: 0,
// //       startId: 0,
// //       showItems: 1,
// //       totalItems: 0,
// //       // MyShows: Shows 
// //       // SliderItems = []
// //     };
// //     this.updateDimensions = this.updateDimensions.bind(this);
// //   }


// //   componentWillMount() {
// //     window.addEventListener('resize', this.updateDimensions);
// //     this.updateSliderState()
// //     // this.setState({
// //     //   totalItems: Shows.length
// //     // })
// //   }

// //   componentWillUnmount() {
// //     window.removeEventListener('resize', this.updateDimensions)
// //   }

// //   updateDimensions() {
// //     this.setState({
// //       width: window.innerWidth
// //     });
// //     console.log(this.state.width);
// //   }

// //   updateSliderItems(baseShowItem = this.state.showItems) {
// //     let { totalItems, startId } = this.state;
// //     console.log(baseShowItem + ' items are in the window right now')
// //     // left + center + right
// //     // [1] + [4] + [4] + [4] + [1]
// //     //       [5] + [4] + [5]

// //     let centerDataId = []
// //     for(let i = 0; i < baseShowItem; i++) {
// //       let x = startId + i
// //       if(x > totalItems) {
// //         centerDataId.push(x)
// //       } else {
// //         centerDataId.push(x - totalItems)
// //       }
// //     }
// //     let leftDataId = []
// //     for(let i = 0; i < baseShowItem; i++) {
// //       let x = startId - i -1
// //       if(x >= 0) {
// //         leftDataId.push(x)
// //       } else {
// //         leftDataId.push(totalItems + x)
// //       }
// //     }
// //     leftDataId.reverse()

// //     let rightDataId = []
// //     for(let i = 0; i < baseShowItem +1; i++) {
// //       let x = startId + baseShowItem + i
// //       if(x < totalItems - baseShowItem + baseShowItem) {
// //         rightDataId.push(x)
// //       } else {
// //         rightDataId.push(x - totalItems)
// //       }
// //     }
// //     console.log('left', leftDataId)
// //     console.log('center', centerDataId)
// //     console.log('right', rightDataId)
// //   }
// //   updateSliderState() {

// //     let windowWidth = window.innerWidth
// //     let showItems = 2
// //     if (windowWidth > 1400) {
// //       showItems = 6
// //     } else if (windowWidth > 1100) {
// //       showItems = 5
// //     } else if (windowWidth > 800) {
// //       showItems = 4
// //     } else if (windowWidth > 500) {
// //       showItems = 3
// //     } 
// //     let mv = 32/showItems
// //     this.setState({
// //       showItems, mv
// //     })
// //   }


// //   leftArrowClick() {
// //     // const slidermask = this.refs.slidermask;
// //     // slidermask.style.transition = '700ms'
// //     // slidermask.style.transform = `translateX(${this.state.width}px)`
// //     console.log('left')
// //     const { showItems, startId, totalItems, mv } = this.state;
// //     let reducePrev = startId + showItems
// //     let resetStartId = 0
// //     if (reducePrev < 0) {
// //       resetStartId = totalItems + reducePrev
// //     } else {
// //       resetStartId = reducePrev
// //     }
// //     this.updateSliderItems()
// //   }

// //   rightArrowClick() {
// //     // const slidermask = this.refs.slidermask;
// //     // slidermask.style.transition = '700ms'
// //     // slidermask.style.transform = `translateX(-${this.state.width}px)`
// //     console.log('right')
// //     const { showItems, startId, totalItems, mv } = this.state;
// //     let plusNext = startId + showItems
// //     let resetStartId = 0
// //     if (plusNext >= totalItems) {
// //       resetStartId = plusNext - totalItems
// //     } else {
// //       resetStartId = plusNext
// //     }
// //     this.updateSliderItems()
// //   }

// //   render() {
// //     return (
// //       <Wrapper>
// //         <PageHead>Netflix Originals</PageHead>
// //         <Sliderer>
// //           <SliderMask ref="slidermask">
// //             {
// //               Shows.map( (e, i) => {
// //                 return (
// //                   <SliderItem key={i}>
// //                   <SliderItemInner>
// //                     <IMG src={e.art} />
// //                   </SliderItemInner>
// //                 </SliderItem>
// //                 )
// //               })
// //             }
// //           </SliderMask>
// //           <LeftArrow onClick={this.handleOnLeftArrowClick}><LeftArrowIMG src="https://img.icons8.com/ios/96/000000/back-filled.png"/></LeftArrow>
// //           <RightArrow onClick={this.handleOnRightArrowClick}><RightArrowIMG src="https://img.icons8.com/ios/96/000000/forward-filled.png"/></RightArrow>
// //         </Sliderer>
// //       </Wrapper>
// //     );
// //   }
// // }

// // export default Slider;

// // // const badBlood = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdHJy_L_dgNv7cJkRE6s5Wt7UdajpIWtgx8jFLk52ROnZF4EsT_IEzVNL995CBWGRqaQl9sWB-N9VwvJ1cnYLoCjKd68dAADPcpKRqIZXjh4U5StQ_BrUz9l8GY82oVLJ_mTP-D8XA.jpg')
// // // const Narcos = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfhkbatZGoQaOOhZKwdLOQASNj1Ol8PY4XFaegWDpPhTefImKdDSz-BGBecQIHHWwZpxyEmlIymqsz5E-S_XuHQbSWM7KvNIMi3xPSlllBfV_j9Y7ZIFiXbB_gCoPoNagoEuR9as3g.jpg')
// // // const ParadisePD = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABUBARHquqDxSYvrhX0wtKvhAUyKN3JnNU7jlNSYcJpX_eTRZf5SgrJRBqBfItefd_14No9ktEjzMUZx2xftb4_tJz3B3UWawwm6-mxvkcoA9W1za31NK_xuL1L2h_xbgOpzXdhrAuA.jpg')
// // // const Mowgli = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABTUr6RiQz0A3_YRBKZssnF049jZdKiug6cCT4Vn6Lz0CyoyDCr_0n9-zUVVZ7C5chEGLKRT3ufE0TKitmjfoifXXOe91V6SyTD_IwU5iKepSLm4IprjX8rCLPzgSJL8eCIIW6UF_fg.jpg')
// // // const That70sShow = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRjPjcb21hLzbvqbfdPqgTYTh_A2cR_p8GJuswyfn48rY3byQA_1ZR0iwyLz0_nRI8BnrfK5PBqerR80fwToX82QzYxliI5fgkQjvaNULyduenGwOLWCpw8tK8Hkxio-Q5q79Gagw98.webp')
// // // const TheRanch = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABStIhZSWeAuoOQDU5sTjVQLvtVgd_odeOlTD_wZ0eEkJZ7WaaGoK5wus0-E9gW7mjXPOCtYGyrtAkAifYWYZnL51P_9xH0JzSdPvyI08WpIvpuiNODb4sOXbZ2KRs1GH8mr-bQMLPioHXSGqgWdODJuXpzpJ_mObRLEreWWE7pMB9P2kKuFnxbeCTK2Tla9Xtw7LdEdnEg.jpg')
// // // const Brooklyn99 = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABWJ9lZ7DSFM_neeoSZOwsICVHCQf15iEKjSV13XhZW50DHPn6cPXVyAcos-fAtWhMyEfCqb4blQ7yCLyJYwlgZbiy8KHdOlWWj-YvGgwntj33r7w6_MPyJEMAcNIl2Z9-muiqLAGKbM.webp')
// // // const TheSinner = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfCItvudPnQiwtkZntxyy4t831YRLMSEt20WS0_8Y71Y6d_PiNgTob89wRrSKsCVCZsUMkbFg939U9e9Pm4SVekO0subcyW5_aJ_Pnv2wwhr7GWNWlWrodomtfz537uAElrpWniMmQ.jpg')
// // // const Ozark = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYpnH2rHc9RGS-sagro81a3NWMBcLimQQsPSLkBIhSwUxGicy8me0Rx_j9Q-W6I_HQr30gtqb-w0nq6qjxoZp8sH1T8O6MijAE6Y9XE1awNoS3y6HC8PfNFsEiG2ewRvD19JSs9xJQ.jpg')
// // // const Suits = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABa1jNVl5zS9EYkKaG5-iQM8IV9OC5zZOHS31wGpRcbmbSHeMKPHi8z8zd2JdWR_OI2XvE_5n4xVw5GWbLhzzdgxFPIen4j5h2WLpprWQRyebjVfUdm0qu3LkDRaY2NSM2WnN10xzwJM.webp')
// // // const BojackHorseman = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABegLBIpoCB3qpd9csMeUMcSEnr_f0nCNGB5Hif9W4b7z6faF5t1ialiBiSNmF28Kl00sHdXAPxH7R2xzm7DhOS8ai0sGn3yffpi7x7jnJkolKmFvhNN26XHuhrldC9bO9O1tfV7UYQ.jpg')
// // // const ElChapo = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSvdpa2D-J11yGbwGyvOyeHMxxJN03bjKT5TZW3MYBy4t7rCGxfW1zAUQKuDw8ieSC9dSkk06CBoyhGXbQniumwV1eZIIqkbBqtoj9x825TYVbEPCqYChVSrJjHDEEZJiPUdG0oHbw.jpg')
// // // const Disenchantment = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABev_6ll8eBVAbXK4OUySbJpzVGja2expMwLWQK-sqJTEIzpgyvHRSMhJRD02n0KEh4_ohIFBAWwdloaEZuSWKUZ2vjayzrG2YUbuffRlRDSIfPTwpNhIVKubWH46hdZc9kmR_wE72g.jpg')
// // // const BreakingBad = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABWKSGe0DJdv6XIV60LyY1FQWVe4bu0k0OD6M84Z68f42zP997i7DZS604Cw1Z0SqycBDweLPQrTYcFm25vILwdR7Z6XkABGK9xB0I_MiXFAyg_e56R0DVtldhdLoaC9JtFQ_0dqNhK4.webp')
// // // const Disjointed = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYDOUs-OOFCme6x4KY00U0nLqGwRNf6KHUfYpkji7G2KmBKG8a9IWDIWCMTiN5ssru_sroySOc4AFVT_menW91-zBGBxqMXN56RKWGJFq3xVL9Yf5ToLiTwZ8dQiuQlaTVOUETM0mQ.jpg')
// // // const DeathByMagic = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABb5w6LPFkUf6_HPzZzokf9NWn7SNAIY9FOTAXtLLrlfDz_T7iIuIzxRIXvbMPHxAovTXnKHKjxBWVzZSWpyv0OZswm0Js2q6pGuqIdpG_mDL5JWfPnOfTiR6DMqoQsSJfvZxrl05cg.jpg')
// // // const BumpingMics = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbG_hmCN4NTbL3iECf93sz_wyU9w_HfC7-1jlUHxl_ZVWfL8SAxHV5y8JAxA8r-whmXGjKT6HXIbMkeXj-OgWyQETjidYBoQp9-gMM8ZulsUGCdLcgpVNZfr7EjdOJYyIj3wJQXqqQ.jpg')
// // // const Lucifer = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABU_b1YhqPiGqLLTyiOEfzgnPUeXz3l5NkbVvcVF5IIzLN7czqZLsEKaWKzO8nWYDmxTHHcK4145wbgfR4IeY14rsQRM-jE_xDEWRhpZHvp2z88mzKaYOT18UGyL55-S5FHCgaBHNcrw.webp')
// // // const The100 = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSf1IK4UXFERCh-XRQmfYmG2x8prdtM4NlWEdr9AdXR4umaJ-PQ7upiS_I2ZRt4qlxlUzUyh4AuOqueGwOerDEs_qegHLVlMo1GQWnQz-kNGw5L3gKZD-QQ78hMhVgFTTRP14Euci4M.webp')
// // // const MakingAmurderer = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABUTr-sO5tVU9UOK2XEVSeA57tiiKFVkvOE-XUhDGbkAv18n5CPpH2_wnGwJn2Hw4l6t_0ACJHTW4YFzYEsdFncPrXmuQ9O7fnrX1BMXrp--lr9s9be9ygH6O-KTzJAxQ0qZt7NbUKQ.jpg')
// // // const ManhuntUnabomber = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABX2qfo3zMLrLT0XXtqTCCL91dc1Ovb3M3sG8AajkPNeiNwpOUthvpdfcEtwtLUHHnM9lu1VXVgPD6TM9CiquawLm4mq_ljcahkedojZJmXfCOLw2xFW4SVLcjIJhGs0MRsvebCKlLg.jpg')
// // // const TheDefenders = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfDADzMKnc14qbLxN6_fjExQWm9AEuy92lLnDJJ2yWQRTetc_E-VYdfN-NRk71qRPRNw64-Pe_Uo-jwrHWX0QLbz6G7Gnk8vHM6ANzRvDp_Xb7fU2o96RCJHbCzz-GcHLAYKw4JpTA.jpg')
// // // const Riverdale = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABXIbMtctIvU1VPHuR0K_3cCwvBXA8CIjEGmCB0w3QUhHQ3Rz7cA0lW01TDIu4Im2eMquHmeZ-p388khPIkuQNDWsUH3F1Gf-vTP-NY-lmxQ0Yj38l1m34T3f1AIPukVjUuIa5qZ3_GajgnoAca2k4PAbdL0YNqDQUkCMZuv2SxU8Mdw_6vIiLl5jA48KQbtZJRcfkxRmfg.jpg')
// // // const BetterCallSaul = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABXIbMtctIvU1VPHuR0K_3cCwvBXA8CIjEGmCB0w3QUhHQ3Rz7cA0lW01TDIu4Im2eMquHmeZ-p388khPIkuQNDWsUH3F1Gf-vTP-NY-lmxQ0Yj38l1m34T3f1AIPukVjUuIa5qZ3_GajgnoAca2k4PAbdL0YNqDQUkCMZuv2SxU8Mdw_6vIiLl5jA48KQbtZJRcfkxRmfg.jpg')
// // // const RickAndMorty = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABW4MvDo2iIzeHISS7ofv4Ra9vc5WJxX7fuBofNLh_6lDrUW1YXuR7QGc4lvbJuSyGkM7AioCUbi2BkObi8g2ExveY_SmIF7NZny5Z42i2gXQod_3b9eusldSlF9tPbXiZo9BCLFfvlA.webp')
// // // const MindHunter = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSAI-7o2vtPDTTnKSTVCZg1HIu5L8KSTrBaRV6Z64ltjU7XOtPGJahAmaGDZPt0PKcg9bzcQI-yf1MSyiaroewuxaVheGNKU0mnGGXhJnzqi5S9aLod6w3jW1I3OAy-2lQMZeF8JOg.jpg')
// // // const MadMen = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABedUeIx5Vv83yVRL9ejawl6R2NtA2jxUQJB2kEWM58EDx7TKYzPK0E2jt7SM0xkQZw2yP4y2d1VPyvhytyV3huwQY6i8FQrkLZeqDZqgyK3tjokjtVcZq7MkQctTRUrQBJ2vuOtKdsg.webp')
// // // const TheHuntingOfHillHouse = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZp7kNUYfP2L2jFv1eot5NLMcLY8DRA7oxdZ7zaVm0mLylyEvjBkpwz8VJu9Zg-exgr15DZnuNl2nakMnEi4nlLuN71rXFcRVI72qAFuXrc8FLgtP57Vtx7yeuGMR85wpsC5hNqAsw.jpg')
// // // const Fargo = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSYsDCcbwcYiM56Z8qqDiqP013qQxK8JOFSNXInvJG1x0CI2IxCRIsYG4_2_6y6e53vR7MAjSKUWX8ftYfHDGgJ59PHhCG__nO4OkbN36J33v-kSW-y2hC7CVrn51VDzyNis35wdQqQ.webp')
// // // const Sabrina = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQXfOlR49LefUdn5YW-wY7qNGhWclFCMgVGBdVABjPC_VGed4j8nmccxTEgkFvT5xPH3LFTd-wHxgNjxyOk8qEf6CFfRUK3TthPN1TTQP_6UIV0uBBEAyvt8Uc2nk6uLmBjgZENshA.jpg')
// // // const MoneyHeist = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVmW8eTFbvTJkHcnqTgKUsnAlAVoQxLKHRqlv7OpWOYoEHBQ0nyhfsg10NI84RMLtlRo-67JAjihEpCd1ieJX8GTltS6DWeaQ_JIKjjOv0Gh0S43DVWIZM9izSirEoYurA0_SD8GuA.jpg')
// // // const Dexter = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABa96lsLLabBWHi5vLLCtB9W7ff9jqmhzd8jBAMbnaIJTiu98ceMu_k0gX_B-buJcJDqrsaBoHWCVIk3JkjviKcQFIOuVZSqUbISTsT_epOdx0dKd9G7UM_FYKKPaxxFCwOFha7bDqEc.webp')
// // // const JessicaJones = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZkMIJryuhLk1bV5BNUZPF7N8afFSH-lNnS0-Lrthh2nyEUUW_nAAffYHWPkOAlta-JYHjnnnwcsFLtjB-B467QuqCgLtnqIko2EiENtTR-ncEsGPIJV-UISNW0SGH4H6UwNkbETZQ.jpg')
// // // const Friends = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABf85MBfa1k4bFEVfSI7CNfVr8Qt7ZUuKtMAvD-66e9MKtqNEW2UkzxMTYzXftDqJZEFN3bHr44SdwcMBaVQzbVh2G0X1kaRRpFjMhA0pMnavHskfUaGrJJTcyHcpb-aAIn9U_iBfNHI.webp')
// // // const Weeds = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABY4Wbb_z0I6rLno48JCoD2fZKq3WYftOZ9uDe0Ke4dCl0LtOEbdDSdjNT2jtvuDQco56gxtu7xDMIGMNWNDHyCW_ise7SVDEmKDSL1yxa_ntqVGtkb68BCn8vPrle4fPBqSX9oRHfvs.webp')
// // // const PeakyBlinders = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZ3PW4KZ_T28uotvOKiygx6TZuLfMPuX4xZCcOQUm0NAg9wW4HQvg91348H8WP4Tfx4ACfNlJ1k0ccJKw6RrbFaxSSsDEf8EGyZzf10yI-vD9xc3FEDoRwfcS0ZJdrhpt8CNMALDgPg.webp')
// // // const JoeRogerStrangerTimes = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABf1FFGztq14qWA9yN4ZlO7G2xhyar7e4aHcqrJittowTyIViuRWPe4494Mt-0TYVfY3tkgs3KIi7gAyTDchiWozYYy96SfLMljnTk4B0xS9_HT3NjSjnH5HiOFK7-psz9HKtHaKNUA.jpg')
// // // const RusselBrandRebirth = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYcT8RLDLIVyJgzAx4FHf97CtTeN7f4BSshg9zsKPJZO3KtFO4tVs0NU-s0cNBdnMpWgRXI0HQggspD0GHrfXMvNqKq49JthxQfZgGElMrd3SSeV4xGyYf_oE8fqmEeJKkNR8n_TIw.jpg')
// // // const BlackList = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABWnAaENFNTs3ykUzPVXtlQBQC_g9SsOAue0eCvQZE6HYFDMVi-OWjUHRrxVNwywXgvKsKnT3bdQl7fMaDePOdm8guIZAuz4uku5QEAjp5GCHIMM_6wfKzIWrxxpzZe2ju7Xi4vt-768.webp')
// // // const ThirteenReasonsWhy = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABXfyzzGhJnj-RD2cILwxrdnxbf472WT-2jbRv7yhxFAjbI5b01wP5c85oGrJ1MbJR6QcGNJMgY9LcQ5CZjQunXox45puJm1sAAoTtx3Qo-ohWKpgMoHJVMCRh0izLKk2mNu55mQ_OQ.jpg')
// // // const IronFist = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfH9_JnrO1cFe9L__G-EREjJpNId9DjM3zN29vMcz_lR_8Zzk__6ScCU5JGziXmKe1eUA_LoKNRNBM3EaniJ7gla7vHYmrmybB6RRsOnUulWdWXQIh5O3FmR_yQSeGEZFWG_e-0_Cw.jpg')
// // // const OrphanBlack = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQ0I-6IuNAYN-41A8p4TFnIQSMfcKZaMNB4C4GIcvScTXUdyqnKrt_djGCP5gsczu_KjISs4GHdKh1oXLO9h4M3qQHgCQLnH1xTW3cibW3-3larLLaOtXOwNtw00xalirlw6UblYkxE.webp')
// // // const Elementary = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABT0C-GjL6m9IJ3pEIttPWhHP9ZjworqpVqW6HbqfVh7tV7FMFfqoPWH1u59HX-nuqyfXmYI3sh8Zmaj3dBLuJFlGFC_umxK8LdMmh7u62NcKULrbKQSFnSXeDmW19stsdEE4dQAT1Us.webp')
// // // const Vikings = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABZprnerfU6fd9-q8-qhnOJQ2oRmByeRJEiuJqdH8egoBd1gJavifpTznhkNxnX0Zln2_-yt1bJcmhClWLuJgGnAtf0pX7D7Knr3SO2FvaoabjyoS-vT8Zl34Ohr8hzI2YOgrr66bqSIw-uK3L540pmOUH-HDSVFNQJSoh-qm0mo6bFvLIS7G7233qdgt64P-KPkUw-mq7fg.webp')
// // // const RayDonovan = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdqOPTMs7cBF19NQbuFRjF0k4XYVJR7b08Tr9jH8Y7jpfo-rXM3NuhpxNzfzuDH7wFvSd9rvYeNyIUMSyUYRF-5L_Q6fxgGlIUvtCOLJGcxtsJUiVuqaRr6eHzXo5Pwir3csBy_gk3k.webp')
// // // const Shooter = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbXoJEitPSH49Xmga1eKuUN3xHuIvbvKCQMpVD_Oljl_qST2TZzMsqJiKM9YTH23KJ1RUy5RUNddnPeEdSvNNt99a4K4pWjvDo7I057_Y5T9UBr8WaXofsxOvajS-ITS9IoNZWlmCw.jpg')
// // // const PineAppleExpress = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSKo5prcsQpChpCkKhg0re6YI2ggixpgWsiNmaiBJUrZms1zxmRaWVprnkidd6rkQ_Km0VZEJYm9CZcYHVdJcCDQ6PANIwC2_7kIwxdUgAdcwKA-RiHM45QGGsJQQgHgVpZ27Y6sG1U.webp')
// // // const TheBabysitter = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABU1yfFvWWM8BUpLs2NBF5s9WmqHfHJ_dKzqz_XcX-2k41kaTnyVqw-Q6C6XWe1dv0yLn_M_7Vqfl_UCgH4_k6hauY7r6m7csGgCeSepw8-I4I65DQNppFzlHtPhMhN6FdG3Vp_hT3A.jpg')
// // // const Moana = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABc9Gv3D91VVesqZS2SLNhcjwW3W3f4hP2KGcIsZOWKqbdkZmzB5_1fCGbTjpyEmgKXLu-xQQF8_wljnNr929bl_bV8IlEKl9ypNDlSHcyLC7fFUNYPR_ox7gcCySzbGDhl5ti-4fKz8.webp')
// // // const OutlawKing = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVyRwN8jpve3bdT8gP2w4dbbopyzF9oaXopAhmcURTTxgyzKd5zOm1rc3Jzit8TyUSHXNCUzk8HIKGixyipz72FmvqMXkGcSLZim30awSWGASRi2ED4ENx1DmEaEW06NJxIggyP-4A.jpg')
// // // const TwentyTwoJuly = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABW3Jy4wVG0YogWEEIUI7cg9TlwVQfndkE7YImhOCwiG1Nf-2WbeVvKCx2nKK91EoZcrd5BCKs74E_9WsayBFxi_rKCRa9FcNdnXClTrZ6PH4WIc9tesWtLCJhmJIIeqpR6A1o9lFGg.jpg')
// // // const HowItEnds = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVjucf3WXxze3I-2S64wUucA3o0bPcmCaf5iHD6runOiVQH-R630-0lQdyY0urwfs_NiPZHtnmN4hZ9KtVi6RszaGWFXMlZONAqtvbk23qAoxON7PbFkJspxoy6nw_2a9HuqKI8tcA.jpg')
// // // const Ted = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZiiSVls7b12TKOzJfBn3HDprFyt_NnEki9-JSJXRlF-dEHpiPIQf-L-NnDy8CXE0OmHR80DrPd-4PREkBxzGLUu5f7ZvjuET9Cu3G0-Eco6jkfxQP3H2leLXnjATyHjXPn_7lQT-yQ.webp')
// // // const Shrek = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdtJHOqTlIw-d5XxvLA1CKQ3ZHpEYR8tsA3YbegFZDFrhZ3K4Hy5BQcHc4E8gN_eqaIHVbYdjZL7u5LcZO0tHJr23vtHAH58zK-U00Fyp4vQzvxWLOFwRMa5kpFDJioI_hk2GIpdo-o.webp')
// // // const TheDarkKnight = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABXxK9q7Fh2VQiA_YMNpmIGq7m8I2_v7inMKyMtrX4RdhLh3ANvEJaubanggOtXxJkFOTzMiz9VoRFzLvHs5kVEAf95wsfR6iqqiBKHC4E8iVPrKBYO0OsXqHeROIoaq_DQ7nmZ_smYA.webp')
// // // const Inception = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVQLUisR7DtD6GP8jPpeJjOn8UAFWsekXwaEEUYOoA36mitPZ_obfKhk1WUUx_2Ed1kEgKNZj27qT-XGzGh6W8oEAY-rKLJC2u_QkagltmXNlSacaFc2gtj4FncvZeW2IiOEhYqD9FY.webp')



// // const badBlood = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdHJy_L_dgNv7cJkRE6s5Wt7UdajpIWtgx8jFLk52ROnZF4EsT_IEzVNL995CBWGRqaQl9sWB-N9VwvJ1cnYLoCjKd68dAADPcpKRqIZXjh4U5StQ_BrUz9l8GY82oVLJ_mTP-D8XA.jpg')
// // const Narcos = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfhkbatZGoQaOOhZKwdLOQASNj1Ol8PY4XFaegWDpPhTefImKdDSz-BGBecQIHHWwZpxyEmlIymqsz5E-S_XuHQbSWM7KvNIMi3xPSlllBfV_j9Y7ZIFiXbB_gCoPoNagoEuR9as3g.jpg')
// // const ParadisePD = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABUBARHquqDxSYvrhX0wtKvhAUyKN3JnNU7jlNSYcJpX_eTRZf5SgrJRBqBfItefd_14No9ktEjzMUZx2xftb4_tJz3B3UWawwm6-mxvkcoA9W1za31NK_xuL1L2h_xbgOpzXdhrAuA.jpg')
// // const Mowgli = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABTUr6RiQz0A3_YRBKZssnF049jZdKiug6cCT4Vn6Lz0CyoyDCr_0n9-zUVVZ7C5chEGLKRT3ufE0TKitmjfoifXXOe91V6SyTD_IwU5iKepSLm4IprjX8rCLPzgSJL8eCIIW6UF_fg.jpg')
// // const That70sShow = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRjPjcb21hLzbvqbfdPqgTYTh_A2cR_p8GJuswyfn48rY3byQA_1ZR0iwyLz0_nRI8BnrfK5PBqerR80fwToX82QzYxliI5fgkQjvaNULyduenGwOLWCpw8tK8Hkxio-Q5q79Gagw98.webp')
// // const TheRanch = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABStIhZSWeAuoOQDU5sTjVQLvtVgd_odeOlTD_wZ0eEkJZ7WaaGoK5wus0-E9gW7mjXPOCtYGyrtAkAifYWYZnL51P_9xH0JzSdPvyI08WpIvpuiNODb4sOXbZ2KRs1GH8mr-bQMLPioHXSGqgWdODJuXpzpJ_mObRLEreWWE7pMB9P2kKuFnxbeCTK2Tla9Xtw7LdEdnEg.jpg')
// // const Brooklyn99 = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABWJ9lZ7DSFM_neeoSZOwsICVHCQf15iEKjSV13XhZW50DHPn6cPXVyAcos-fAtWhMyEfCqb4blQ7yCLyJYwlgZbiy8KHdOlWWj-YvGgwntj33r7w6_MPyJEMAcNIl2Z9-muiqLAGKbM.webp')
// // const TheSinner = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfCItvudPnQiwtkZntxyy4t831YRLMSEt20WS0_8Y71Y6d_PiNgTob89wRrSKsCVCZsUMkbFg939U9e9Pm4SVekO0subcyW5_aJ_Pnv2wwhr7GWNWlWrodomtfz537uAElrpWniMmQ.jpg')
// // const Ozark = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYpnH2rHc9RGS-sagro81a3NWMBcLimQQsPSLkBIhSwUxGicy8me0Rx_j9Q-W6I_HQr30gtqb-w0nq6qjxoZp8sH1T8O6MijAE6Y9XE1awNoS3y6HC8PfNFsEiG2ewRvD19JSs9xJQ.jpg')
// // const Suits = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABa1jNVl5zS9EYkKaG5-iQM8IV9OC5zZOHS31wGpRcbmbSHeMKPHi8z8zd2JdWR_OI2XvE_5n4xVw5GWbLhzzdgxFPIen4j5h2WLpprWQRyebjVfUdm0qu3LkDRaY2NSM2WnN10xzwJM.webp')
// // const BojackHorseman = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABegLBIpoCB3qpd9csMeUMcSEnr_f0nCNGB5Hif9W4b7z6faF5t1ialiBiSNmF28Kl00sHdXAPxH7R2xzm7DhOS8ai0sGn3yffpi7x7jnJkolKmFvhNN26XHuhrldC9bO9O1tfV7UYQ.jpg')
// // const ElChapo = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSvdpa2D-J11yGbwGyvOyeHMxxJN03bjKT5TZW3MYBy4t7rCGxfW1zAUQKuDw8ieSC9dSkk06CBoyhGXbQniumwV1eZIIqkbBqtoj9x825TYVbEPCqYChVSrJjHDEEZJiPUdG0oHbw.jpg')
// // const Disenchantment = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABev_6ll8eBVAbXK4OUySbJpzVGja2expMwLWQK-sqJTEIzpgyvHRSMhJRD02n0KEh4_ohIFBAWwdloaEZuSWKUZ2vjayzrG2YUbuffRlRDSIfPTwpNhIVKubWH46hdZc9kmR_wE72g.jpg')
// // const BreakingBad = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABWKSGe0DJdv6XIV60LyY1FQWVe4bu0k0OD6M84Z68f42zP997i7DZS604Cw1Z0SqycBDweLPQrTYcFm25vILwdR7Z6XkABGK9xB0I_MiXFAyg_e56R0DVtldhdLoaC9JtFQ_0dqNhK4.webp')
// // const Disjointed = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYDOUs-OOFCme6x4KY00U0nLqGwRNf6KHUfYpkji7G2KmBKG8a9IWDIWCMTiN5ssru_sroySOc4AFVT_menW91-zBGBxqMXN56RKWGJFq3xVL9Yf5ToLiTwZ8dQiuQlaTVOUETM0mQ.jpg')
// // const DeathByMagic = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABb5w6LPFkUf6_HPzZzokf9NWn7SNAIY9FOTAXtLLrlfDz_T7iIuIzxRIXvbMPHxAovTXnKHKjxBWVzZSWpyv0OZswm0Js2q6pGuqIdpG_mDL5JWfPnOfTiR6DMqoQsSJfvZxrl05cg.jpg')
// // const BumpingMics = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbG_hmCN4NTbL3iECf93sz_wyU9w_HfC7-1jlUHxl_ZVWfL8SAxHV5y8JAxA8r-whmXGjKT6HXIbMkeXj-OgWyQETjidYBoQp9-gMM8ZulsUGCdLcgpVNZfr7EjdOJYyIj3wJQXqqQ.jpg')
// // const Lucifer = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABU_b1YhqPiGqLLTyiOEfzgnPUeXz3l5NkbVvcVF5IIzLN7czqZLsEKaWKzO8nWYDmxTHHcK4145wbgfR4IeY14rsQRM-jE_xDEWRhpZHvp2z88mzKaYOT18UGyL55-S5FHCgaBHNcrw.webp')
// // const The100 = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSf1IK4UXFERCh-XRQmfYmG2x8prdtM4NlWEdr9AdXR4umaJ-PQ7upiS_I2ZRt4qlxlUzUyh4AuOqueGwOerDEs_qegHLVlMo1GQWnQz-kNGw5L3gKZD-QQ78hMhVgFTTRP14Euci4M.webp')
// // const MakingAmurderer = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABUTr-sO5tVU9UOK2XEVSeA57tiiKFVkvOE-XUhDGbkAv18n5CPpH2_wnGwJn2Hw4l6t_0ACJHTW4YFzYEsdFncPrXmuQ9O7fnrX1BMXrp--lr9s9be9ygH6O-KTzJAxQ0qZt7NbUKQ.jpg')
// // const ManhuntUnabomber = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABX2qfo3zMLrLT0XXtqTCCL91dc1Ovb3M3sG8AajkPNeiNwpOUthvpdfcEtwtLUHHnM9lu1VXVgPD6TM9CiquawLm4mq_ljcahkedojZJmXfCOLw2xFW4SVLcjIJhGs0MRsvebCKlLg.jpg')
// // const TheDefenders = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfDADzMKnc14qbLxN6_fjExQWm9AEuy92lLnDJJ2yWQRTetc_E-VYdfN-NRk71qRPRNw64-Pe_Uo-jwrHWX0QLbz6G7Gnk8vHM6ANzRvDp_Xb7fU2o96RCJHbCzz-GcHLAYKw4JpTA.jpg')
// // const Riverdale = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABXIbMtctIvU1VPHuR0K_3cCwvBXA8CIjEGmCB0w3QUhHQ3Rz7cA0lW01TDIu4Im2eMquHmeZ-p388khPIkuQNDWsUH3F1Gf-vTP-NY-lmxQ0Yj38l1m34T3f1AIPukVjUuIa5qZ3_GajgnoAca2k4PAbdL0YNqDQUkCMZuv2SxU8Mdw_6vIiLl5jA48KQbtZJRcfkxRmfg.jpg')
// // const BetterCallSaul = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABXIbMtctIvU1VPHuR0K_3cCwvBXA8CIjEGmCB0w3QUhHQ3Rz7cA0lW01TDIu4Im2eMquHmeZ-p388khPIkuQNDWsUH3F1Gf-vTP-NY-lmxQ0Yj38l1m34T3f1AIPukVjUuIa5qZ3_GajgnoAca2k4PAbdL0YNqDQUkCMZuv2SxU8Mdw_6vIiLl5jA48KQbtZJRcfkxRmfg.jpg')
// // const RickAndMorty = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABW4MvDo2iIzeHISS7ofv4Ra9vc5WJxX7fuBofNLh_6lDrUW1YXuR7QGc4lvbJuSyGkM7AioCUbi2BkObi8g2ExveY_SmIF7NZny5Z42i2gXQod_3b9eusldSlF9tPbXiZo9BCLFfvlA.webp')
// // const MindHunter = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSAI-7o2vtPDTTnKSTVCZg1HIu5L8KSTrBaRV6Z64ltjU7XOtPGJahAmaGDZPt0PKcg9bzcQI-yf1MSyiaroewuxaVheGNKU0mnGGXhJnzqi5S9aLod6w3jW1I3OAy-2lQMZeF8JOg.jpg')
// // const MadMen = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABedUeIx5Vv83yVRL9ejawl6R2NtA2jxUQJB2kEWM58EDx7TKYzPK0E2jt7SM0xkQZw2yP4y2d1VPyvhytyV3huwQY6i8FQrkLZeqDZqgyK3tjokjtVcZq7MkQctTRUrQBJ2vuOtKdsg.webp')
// // const TheHuntingOfHillHouse = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZp7kNUYfP2L2jFv1eot5NLMcLY8DRA7oxdZ7zaVm0mLylyEvjBkpwz8VJu9Zg-exgr15DZnuNl2nakMnEi4nlLuN71rXFcRVI72qAFuXrc8FLgtP57Vtx7yeuGMR85wpsC5hNqAsw.jpg')
// // const Fargo = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSYsDCcbwcYiM56Z8qqDiqP013qQxK8JOFSNXInvJG1x0CI2IxCRIsYG4_2_6y6e53vR7MAjSKUWX8ftYfHDGgJ59PHhCG__nO4OkbN36J33v-kSW-y2hC7CVrn51VDzyNis35wdQqQ.webp')
// // const Sabrina = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQXfOlR49LefUdn5YW-wY7qNGhWclFCMgVGBdVABjPC_VGed4j8nmccxTEgkFvT5xPH3LFTd-wHxgNjxyOk8qEf6CFfRUK3TthPN1TTQP_6UIV0uBBEAyvt8Uc2nk6uLmBjgZENshA.jpg')
// // const MoneyHeist = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVmW8eTFbvTJkHcnqTgKUsnAlAVoQxLKHRqlv7OpWOYoEHBQ0nyhfsg10NI84RMLtlRo-67JAjihEpCd1ieJX8GTltS6DWeaQ_JIKjjOv0Gh0S43DVWIZM9izSirEoYurA0_SD8GuA.jpg')
// // const Dexter = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABa96lsLLabBWHi5vLLCtB9W7ff9jqmhzd8jBAMbnaIJTiu98ceMu_k0gX_B-buJcJDqrsaBoHWCVIk3JkjviKcQFIOuVZSqUbISTsT_epOdx0dKd9G7UM_FYKKPaxxFCwOFha7bDqEc.webp')
// // const JessicaJones = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZkMIJryuhLk1bV5BNUZPF7N8afFSH-lNnS0-Lrthh2nyEUUW_nAAffYHWPkOAlta-JYHjnnnwcsFLtjB-B467QuqCgLtnqIko2EiENtTR-ncEsGPIJV-UISNW0SGH4H6UwNkbETZQ.jpg')
// // const Friends = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABf85MBfa1k4bFEVfSI7CNfVr8Qt7ZUuKtMAvD-66e9MKtqNEW2UkzxMTYzXftDqJZEFN3bHr44SdwcMBaVQzbVh2G0X1kaRRpFjMhA0pMnavHskfUaGrJJTcyHcpb-aAIn9U_iBfNHI.webp')
// // const Weeds = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABY4Wbb_z0I6rLno48JCoD2fZKq3WYftOZ9uDe0Ke4dCl0LtOEbdDSdjNT2jtvuDQco56gxtu7xDMIGMNWNDHyCW_ise7SVDEmKDSL1yxa_ntqVGtkb68BCn8vPrle4fPBqSX9oRHfvs.webp')
// // const PeakyBlinders = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZ3PW4KZ_T28uotvOKiygx6TZuLfMPuX4xZCcOQUm0NAg9wW4HQvg91348H8WP4Tfx4ACfNlJ1k0ccJKw6RrbFaxSSsDEf8EGyZzf10yI-vD9xc3FEDoRwfcS0ZJdrhpt8CNMALDgPg.webp')
// // const JoeRogerStrangerTimes = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABf1FFGztq14qWA9yN4ZlO7G2xhyar7e4aHcqrJittowTyIViuRWPe4494Mt-0TYVfY3tkgs3KIi7gAyTDchiWozYYy96SfLMljnTk4B0xS9_HT3NjSjnH5HiOFK7-psz9HKtHaKNUA.jpg')
// // const RusselBrandRebirth = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYcT8RLDLIVyJgzAx4FHf97CtTeN7f4BSshg9zsKPJZO3KtFO4tVs0NU-s0cNBdnMpWgRXI0HQggspD0GHrfXMvNqKq49JthxQfZgGElMrd3SSeV4xGyYf_oE8fqmEeJKkNR8n_TIw.jpg')
// // const BlackList = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABWnAaENFNTs3ykUzPVXtlQBQC_g9SsOAue0eCvQZE6HYFDMVi-OWjUHRrxVNwywXgvKsKnT3bdQl7fMaDePOdm8guIZAuz4uku5QEAjp5GCHIMM_6wfKzIWrxxpzZe2ju7Xi4vt-768.webp')
// // const ThirteenReasonsWhy = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABXfyzzGhJnj-RD2cILwxrdnxbf472WT-2jbRv7yhxFAjbI5b01wP5c85oGrJ1MbJR6QcGNJMgY9LcQ5CZjQunXox45puJm1sAAoTtx3Qo-ohWKpgMoHJVMCRh0izLKk2mNu55mQ_OQ.jpg')
// // const IronFist = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfH9_JnrO1cFe9L__G-EREjJpNId9DjM3zN29vMcz_lR_8Zzk__6ScCU5JGziXmKe1eUA_LoKNRNBM3EaniJ7gla7vHYmrmybB6RRsOnUulWdWXQIh5O3FmR_yQSeGEZFWG_e-0_Cw.jpg')
// // const OrphanBlack = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQ0I-6IuNAYN-41A8p4TFnIQSMfcKZaMNB4C4GIcvScTXUdyqnKrt_djGCP5gsczu_KjISs4GHdKh1oXLO9h4M3qQHgCQLnH1xTW3cibW3-3larLLaOtXOwNtw00xalirlw6UblYkxE.webp')
// // const Elementary = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABT0C-GjL6m9IJ3pEIttPWhHP9ZjworqpVqW6HbqfVh7tV7FMFfqoPWH1u59HX-nuqyfXmYI3sh8Zmaj3dBLuJFlGFC_umxK8LdMmh7u62NcKULrbKQSFnSXeDmW19stsdEE4dQAT1Us.webp')
// // const Vikings = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABZprnerfU6fd9-q8-qhnOJQ2oRmByeRJEiuJqdH8egoBd1gJavifpTznhkNxnX0Zln2_-yt1bJcmhClWLuJgGnAtf0pX7D7Knr3SO2FvaoabjyoS-vT8Zl34Ohr8hzI2YOgrr66bqSIw-uK3L540pmOUH-HDSVFNQJSoh-qm0mo6bFvLIS7G7233qdgt64P-KPkUw-mq7fg.webp')
// // const RayDonovan = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdqOPTMs7cBF19NQbuFRjF0k4XYVJR7b08Tr9jH8Y7jpfo-rXM3NuhpxNzfzuDH7wFvSd9rvYeNyIUMSyUYRF-5L_Q6fxgGlIUvtCOLJGcxtsJUiVuqaRr6eHzXo5Pwir3csBy_gk3k.webp')
// // const Shooter = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbXoJEitPSH49Xmga1eKuUN3xHuIvbvKCQMpVD_Oljl_qST2TZzMsqJiKM9YTH23KJ1RUy5RUNddnPeEdSvNNt99a4K4pWjvDo7I057_Y5T9UBr8WaXofsxOvajS-ITS9IoNZWlmCw.jpg')
// // const PineAppleExpress = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSKo5prcsQpChpCkKhg0re6YI2ggixpgWsiNmaiBJUrZms1zxmRaWVprnkidd6rkQ_Km0VZEJYm9CZcYHVdJcCDQ6PANIwC2_7kIwxdUgAdcwKA-RiHM45QGGsJQQgHgVpZ27Y6sG1U.webp')
// // const TheBabysitter = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABU1yfFvWWM8BUpLs2NBF5s9WmqHfHJ_dKzqz_XcX-2k41kaTnyVqw-Q6C6XWe1dv0yLn_M_7Vqfl_UCgH4_k6hauY7r6m7csGgCeSepw8-I4I65DQNppFzlHtPhMhN6FdG3Vp_hT3A.jpg')
// // const Moana = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABc9Gv3D91VVesqZS2SLNhcjwW3W3f4hP2KGcIsZOWKqbdkZmzB5_1fCGbTjpyEmgKXLu-xQQF8_wljnNr929bl_bV8IlEKl9ypNDlSHcyLC7fFUNYPR_ox7gcCySzbGDhl5ti-4fKz8.webp')
// // const OutlawKing = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVyRwN8jpve3bdT8gP2w4dbbopyzF9oaXopAhmcURTTxgyzKd5zOm1rc3Jzit8TyUSHXNCUzk8HIKGixyipz72FmvqMXkGcSLZim30awSWGASRi2ED4ENx1DmEaEW06NJxIggyP-4A.jpg')
// // const TwentyTwoJuly = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABW3Jy4wVG0YogWEEIUI7cg9TlwVQfndkE7YImhOCwiG1Nf-2WbeVvKCx2nKK91EoZcrd5BCKs74E_9WsayBFxi_rKCRa9FcNdnXClTrZ6PH4WIc9tesWtLCJhmJIIeqpR6A1o9lFGg.jpg')
// // const HowItEnds = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVjucf3WXxze3I-2S64wUucA3o0bPcmCaf5iHD6runOiVQH-R630-0lQdyY0urwfs_NiPZHtnmN4hZ9KtVi6RszaGWFXMlZONAqtvbk23qAoxON7PbFkJspxoy6nw_2a9HuqKI8tcA.jpg')
// // const Ted = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZiiSVls7b12TKOzJfBn3HDprFyt_NnEki9-JSJXRlF-dEHpiPIQf-L-NnDy8CXE0OmHR80DrPd-4PREkBxzGLUu5f7ZvjuET9Cu3G0-Eco6jkfxQP3H2leLXnjATyHjXPn_7lQT-yQ.webp')
// // const Shrek = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdtJHOqTlIw-d5XxvLA1CKQ3ZHpEYR8tsA3YbegFZDFrhZ3K4Hy5BQcHc4E8gN_eqaIHVbYdjZL7u5LcZO0tHJr23vtHAH58zK-U00Fyp4vQzvxWLOFwRMa5kpFDJioI_hk2GIpdo-o.webp')
// // const TheDarkKnight = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABXxK9q7Fh2VQiA_YMNpmIGq7m8I2_v7inMKyMtrX4RdhLh3ANvEJaubanggOtXxJkFOTzMiz9VoRFzLvHs5kVEAf95wsfR6iqqiBKHC4E8iVPrKBYO0OsXqHeROIoaq_DQ7nmZ_smYA.webp')
// // const Inception2 = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVQLUisR7DtD6GP8jPpeJjOn8UAFWsekXwaEEUYOoA36mitPZ_obfKhk1WUUx_2Ed1kEgKNZj27qT-XGzGh6W8oEAY-rKLJC2u_QkagltmXNlSacaFc2gtj4FncvZeW2IiOEhYqD9FY.webp')
// // const American Experience: Tesla = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABTaytJhepg8LxDuoOR2zzYvf1cxjOKigOjUpOtu07GoDC99EG4X6W3170fUHwXvSgjnEkLxKytfasCkrGS8XTd_r8AwpCPZQDLA2I68Fxk-hzprE0hilyX1Dz1I1GLrge8zoWe0JLi8.webp')
// // const American Experience:Tesla = synopsis('Inventor and genius Nikola Tesla, whose ideas revolutionized the use of electricity, envisioned technology that became indispensable decades later.')
// // const BlackMirror = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfeudR7pdDjfID8mbJQ7DQyWFwQoDs72lFjJQLEa-_rIwyUOeejmzXUEOkoMggmIur1GZ_aDgnK7FUJofCjklqIalrlsbywmK_G5Qk3fZSqwx5RcQmggSbhOullvcI_q02Rdytl_cg.jpg')
// // const BlackMirror = synopsis("A woman desperate to boost her social media score hits the jackpot when she's invited to a swanky wedding. But the trip doesn't go as planned.")

// // const Californication = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABXm9qEC3Ut0nNLelA_F9bXj2aJYbKopdzR6l3J5tTSaTDZdFFrQ8B4uL7nACHG14lMLX4cc3ZSnUc3Gxr2abdSRmgeHVMgdcAstmDB5H254sWnDcOr23Wk8Xx4MrCPXQuYPTXiAoP9A.webp')
// // const Californication = synopsis("A novelist battles writer's block and a weakness for drugs, booze and sex while struggling to make things work with his girlfriend and daughter.")
// // const BirdBox = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbEY4TKSlAQ593A4gN5jSRhhkDrm5orv_b6nrWdc9QlNq1Z_nwZWqni7rpiGIEOzm-br4l67uDQ6oX-9SzMBwM4NeTCoxdkOWiw0Yfw6704YpgRayFSLAOm9bK3R-T2FNpWZjodvrQ.jpg')
// // const BirdBox = synopsis("Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.")
// // const MindHunter = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSAI-7o2vtPDTTnKSTVCZg1HIu5L8KSTrBaRV6Z64ltjU7XOtPGJahAmaGDZPt0PKcg9bzcQI-yf1MSyiaroewuxaVheGNKU0mnGGXhJnzqi5S9aLod6w3jW1I3OAy-2lQMZeF8JOg.jpg')
// // const MindHunter = synopsis("In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.")
// // const HouseOfCards = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABROJJ0RAroPFJQLcyzMUL89JoTm3IU0BHaTVZkb3QXLeJ0oXTcVKEF3T_UOWdadE2-6MWUnOhE3EtDHTHuKJkQadzPJ83HS92n4vAlmCuqwtCvjtBfqsMdaTmMzt3EwqMC_RJLTqGg.jpg')
// // const HouseOfCards = synopsis("With Frank out of the picture, Claire Underwood steps fully into her own as the first woman president, but faces formidable threats to her legacy.")
// // const StrangerThings = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABV97j3X52xsfQ3SstlDRL7Z-nI-2GeZDURhVl1wpYvTkSbsnyrsC-Wwcavbeu6RlP5CPoyrig1a43_UsM82oRy8wvi1Hu_H8kCoVqm8RHQIkPXybDPCRzo4XWxPIzIBUIl6SWD4Gqw.jpg')
// // const StrangerThings = synopsis("Nancy and Jonathan swap conspiracy theories with a new ally as Eleven searches for someone from her past. “Bob the Brain” tackles a difficult problem.")
// // const AlteredCarbon = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbHv4qlXFXnR4_MAUziwwiWnm3C6UP4uoaUHLa77t1bxXC6Y5P2HUNwwsY5ldT7za-D0U7Ppqn1p5wOCJRW0JcyfMOIll4BjmvX2tFluic_4ATu3E_F9qhlojI_TJJKVP0GYfB1Ylg.jpg')
// // const AlteredCarbon = synopsis("After 250 years on ice, a prisoner returns to life in a new body with one chance to win his freedom: by solving a mind-bending murder.")
// // const MarcoPolo = src('https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZC0ILT-8kXNWNlaXFMxlFbwI5ONQNaPPLBlepiAbmwH6WTy6jvfG49YH3HUYqS6wi1iY7owGL4blAKxaamJH4XDF-v2gJGyq3vaHsyyQRC6W7NUKnRHHx_JAMQESzk6MdKVrMM92w.jpg')
// // const MarcoPolo = synopsis("Set in a world of greed, betrayal, sexual intrigue and rivalry, “Marco Polo” is based on the famed explorer’s adventures in Kublai Khan’s court.")
// // const TheLastKingdom = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYXi2vb6J3kh_d8McaQW9Du5ai8_Hty8P6Xfwan1x110lpusK1PcrcioI_GLHTRLtj8OGbuD3K7QRUkTBYFJOuUDcXXOUOJlsq5Lz7Hb2D1WlhRLFPgHGnteE4J4iEliHoJi7SKVW6g.webp")
// // const TheLastKingdom = synopsis("As Alfred the Great defends his kingdom from Norse invaders, Uhtred -- born a Saxon but raised by Vikings -- seeks to claim his ancestral birthright.")
// const AmericanCrimeStory = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABUeCXLus9xh_t8544ykcV3zSWJPv2ajLxNeLJKKiiXm7Z6ZOSkR3wf-aLT9_4mQgvq0jYwNrAG7DD-K4hR3bkecQNn8fnEDzGQGDTARY0tVjfzzP4iZSoYlTBAMFqOb1Ve0eQZO5WBA.webp")
// const AmericanCrimeStory = synopsis("This anthology series dramatizes historic criminal cases in the U.S., including the O.J. Simpson trial and Andrew Cunanan's 1997 murder spree.")
// const DaveChappelle = src("https://occ-0-1855-300.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSFo9TZFx3dyxL2LJOD8S7vfseowfZkERHPQCfQh-Yc4QIg57P5MVgNhz7rUbbmwl7xz_xKko_An6NHYDoRlIl5hyYc1M9N9XckttOz8SFA3BObz73FQc4i4gubGO1eyJMBxCi4eDQ.jpg")
// const DaveChappelle = synopsis("Comedy titan Dave Chappelle caps a wild year with two stand-up specials packed with scorching new material, self-reflection and tough love.")
// const JimJefferies = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZmwvLS5ptgHR3LICAuHcDCus3GVlTlQaJ5tSx2W4BkXk94mpLorR9oWN1EtM5ZGYuQ3BH_UnnSPuKnjGogN_u-LzLo4KTdNP0gQyCtkxggt8U_dvS9u7j0bTP4vcAwqYsj4NJH0aw.jpg")
// const JimJefferies = synopsis('The gleefully irreverent Jefferies skewers "grabby" celebrities, political hypocrisy and his own ill-advised career moves in a brash stand-up special.')
// const JerrySeinfeld = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABe6azKkejaHuTQQsFOlEa51hHi9SCyLKJCX_wMtcddMx71gKipxvpM-ht8SlpNWsfF7kScc0pg-PJwNmZTB6R0VnwLajvmmwJGcqfyUOBYIJNCc7tEGYgTP7_a8z7XMGxOnJ59XGHA.jpg")
// const JerrySeinfeld = synopsis('Jerry Seinfeld returns to the club that gave him his start in the 1970s, mixing iconic jokes with stories from his childhood and early days in comedy.')
// const Luther = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSF-nFzaRnbsUo3ofjWo54SWmubXZUbuVDo3gYnL-Do72HHNY9H-SbItD85foKynMo46UL7_T49boU31oWs8Q2n0R6wjOLCzkv43S_hReWy1wOau31Xz9lvgPgQ4IqAU6xHK5r_d2ps.webp")
// const Luther = synopsis('A dedicated urban detective tries to keep a grip on his personal life while dealing with the psychological factors underlying the crimes he solves.')
// const Inception = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfam7FXiyzIFSc65SAwgkV-ylx2ZkyFnsAEJZ7WgcOmVMSdOcY9VqLvTLi0gqdiitZNmL_fkHcCltbrKPOiQpRpaAkuh93zq7rKDn1Lde2hFysG6DcfQ_B7EkDXUqXGoNxJOcuwccE4.webp")
// const Inception = synopsis('In this mind-bending sci-fi thriller, a man runs an espionage business built around entering the subconscious of his targets to mold their thoughts.')
// const TheSecretRulesofModernLivingAlgorithms = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABcTEkWQzgiKt5ZGWA_gOasbiTgGDQTCAWnojQq6-2LY1tHulIIOAe0M70ynlN8SZMoGV2rsBmUglN4GUYUhSOigv6rRwKQrkGBB_OB-koWhIIkvu2WXNLhIA6sOZDy-OIg9H99mQ4ak.webp")
// const TheSecretRulesofModernLivingAlgorithms = synopsis('In this documentary, mathematics professor Marcus Du Sautoy reveals the hidden world of algorithms and how these 2,000-year-old problem solvers work.')
// const GoneGirl = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABa7Mth_qyP7IjYm6CQz73xX3ADSy6ZHXhlaHGkTciMSQi9uGVinxDBsuTtgfz85RDP_ZOpjhZg7mmvoH0c7tUq2R_fmuI8nHqIkHxC6EXIzkcUaGqh4JhIa1WsE6Hl89dJdsn8oe9l0.webp")
// const GoneGirl = synopsis('His marriage crumbling, Nick comes home one day to find his wife has vanished. And as the police turn up the heat, shocking truths come to light.')
// const MindHunter2 = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSAI-7o2vtPDTTnKSTVCZg1HIu5L8KSTrBaRV6Z64ltjU7XOtPGJahAmaGDZPt0PKcg9bzcQI-yf1MSyiaroewuxaVheGNKU0mnGGXhJnzqi5S9aLod6w3jW1I3OAy-2lQMZeF8JOg.jpg")
// const MindHunter2 = synopsis('In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.')
// const TheHauntingOfHillHouse = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABUK7W24VAYCD-7U7vDOzo-BTQOFPTVT6pjDbnSYwBtKX45d0CdbLaJ_PVFhPDnzobpBK1mNcW2BAffujYM7_nhOcWesWqI1FBC4OKa7J1Fk2CRKoY54-dIutp1TeYwiBmPEFwFn1jw.jpg")
// const TheHauntingOfHillHouse = synopsis('Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.')
// const Sense8 = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYQ9FzL5myY5MbQ7N5Wl9bubYtfGZTedpJNRvPH_dJWVwnfV7fdeoCyzH7bNrmOAKgecIdznHumLplIdys9hjX6iwSpNZl9nx9AmxoVQSe12kApOugjGTrjE0cOB2XMxrRSPIvGBjg.jpg")
// const Sense8 = synopsis('From the creators of "The Matrix" and "Babylon 5" comes this tense series in which eight people can telepathically experience each others lives.')
// const DesignatedSurvivor = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABUil7tRkOGef9UVj_rj1swypGeDa0lZekUJPKiL1efZRXZ-zpeUVp0wd7GPNk-t1MFGaTp5R8rR4KLhmWzAHNB8kNEyJAz5efeJXRnb_2wGRy8tZh2tRRZwgJQLPV1phl6uAUqC66g.jpg")
// const DesignatedSurvivor = synopsis("America's fate rests in the hands of a low-level official after an attack on Washington decimates the government in this gripping political thriller.")
// const SethRogensHilarityforCharity = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYu408KyYHKM94csmcxk-O5Twdn-aHxvtP2OfCWySXLCPUk4iji2dKmdUk1-cruPdiPCJ7HSpSdZfSNpaNVlKaSASHf1CN8LfW886eRT5s0D-pPMVJ5IeJ8IHmLZWc2ZNuAPdbVlnQ.jpg")
// const SethRogensHilarityforCharity = synopsis("Seth Rogen and friends combine stand-up, sketches and music for an outrageous comedy special that could only come from the mind of Seth.")
// const ScentofaWoman = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVyC4R5CVHJQtsqdsly0-ZtPb-zOKNDFZ8XSQRIs-5cf4gkgucdQ-k5B1m6d7rkHNFmbhEXXV0p-lbJ562WUA4PAIHh0vKKEWrJoG0NPcQOIsma8355x4IlAuoG24CSKdxhyYnoIkQw.webp")
// const ScentofaWoman = synopsis("Hoping to earn some cash during the Thanksgiving holiday, a poor prep-school student agrees to look after a blind and cantankerous retired colonel.")
// const OceansEleven = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdOPj5WaBMmb_Rj2uKkLwqg_tnUubGZi41ABd11D9-jrL-HyGMKKrnqJs4WpyjZUBDbukqavcPB6_3A00dORCpJKhy_fqDjzRT4rpEXODCPV1cmkCxCz0MN97Fh6ZhDQlR1q0i15RzE.webp")
// const OceansEleven = synopsis("Less than 24 hours into his parole, charismatic Danny Ocean is already rolling out his next plan: stealing more than $150 million from three casinos.")
// const DontBreathe = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABeQ4wIh7gdUzGiqqUVR3ScZ_nhb4V3rhbPZD5xv00ETsgNtpvgEtSs2twntXFQDXRJJo20rq2aseJInxvxqP3290isqq91UYa6o5u94lUmWYNXRkhTnFfAIXKHCT83KRs7FZRbVs4cE.webp")
// const DontBreathe = synopsis("He's blind and rich -- the perfect target for robbery. But the tables turn when three teen thieves find themselves in a lethal game of cat and mouse.")
// const TheShining = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABafb5xtko3oSpVmzDhsFf9izBycnZkkLhYk-SNYB6RWsWn3NSwFP4bw9s_lkRFq1Hw82wgxtcnWID3CHZggDvRTBBtujfYhdRu1NG2pylxGjYDAZoj09yMJnqA_wARRlfw4Sy79-M0E.webp")
// const TheShining = synopsis("Jack Torrance descends into madness -- terrorizing his wife and young son -- after living at a deserted and eerie hotel during its off season.")
// const Seven = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCDJAdWUg-lVvWbXTOBU_E93wW7BjGCbAImGn3I66ty9g6YcHB-x5U60g3dQm3fGQG_NRwMH3PbhgOuXcK619AVuqO7OGRyk6o5PyDz6pu53x-hXdU_rKWUJWsNhur2CWNSjpA0ut8.webp")
// const Seven = synopsis("A seasoned homicide detective and his new partner are on a desperate hunt for a killer whose gruesome crimes are based on the Seven Deadly Sins.")
// const AClockworkOrange = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABcMU6rCh4tNhyANHmycnbkjA_K2_FkkWN0wfFHoHloasXA40onUGGb-fDttOPdWHW2ZdtaJC4fsVNzCKZeZ2VnCh_NifJegWzFJUxc4ycVUF1o3AxfimBN0D1bs83gzjdXSL47IrTCA.webp")
// const AClockworkOrange = synopsis("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABcMU6rCh4tNhyANHmycnbkjA_K2_FkkWN0wfFHoHloasXA40onUGGb-fDttOPdWHW2ZdtaJC4fsVNzCKZeZ2VnCh_NifJegWzFJUxc4ycVUF1o3AxfimBN0D1bs83gzjdXSL47IrTCA.webp")
// const GeraldsGame = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRu1NJZdklceYF6UvWNq3V4VnIaEV06x0NtQSG7Y7Fa_VUzclHWROr0otHMYvxN_QXHdIJsilO65hWCf74hGeY8sorRl4KIBpZRy_wBfaEgsEEZPe3K4gLnIwuDk0TASqlG_tH0Dzg.jpg")
// const GeraldsGame = synopsis("Lingerie and handcuffs were meant to spice up their weekend getaway. Instead, they surfaced a wife's darkest fears.")
// const iZombie = src("https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYykWDebJxcypGKdkdkZp6_OmJtotOYJANcZTn_hF9qluR4PqhSzIFrFXpZctTiZkLxsJwnmmLi44ZLy2XgefD14qGaQuigZ2MwL7e3tIRmWyErWyTTBJJab1zFLB-ziIK_-vovQQaI.webp")
// const iZombie = synopsis("A medical student-turned-zombie tries to retain her humanity by eating brains at the morgue and finds she has an uncanny new gift for solving crimes.")

{/* <iframe width="966" height="543" src="https://www.youtube.com/embed/MPWMBITCudM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

// background-image: linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);

// const font1_medium = "https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v2/NetflixSans-Medium-Opt.woff2"
// const font2_regular = "https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v2/NetflixSans-Regular-Opt.woff2"
// const font3_icon_v1_93 = "https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.woff"





// wonderwomanposterhorizontal = 'https://res.cloudinary.com/christekh/image/upload/imekS7f1OuHyUP2LAiTEM0zBzUz_cculi1'
// ThorRagnarokposterhorizontal = 'https://res.cloudinary.com/christekh/image/upload/rzRwTcFvttcN1ZpX2xv4j3tSdJu_lfwdxs'
// Guadiansofthegalaxy2posterhorizontal = 'https://res.cloudinary.com/christekh/image/upload/y4MBh0EjBlMuOzv9axM4qJlmhzz_vhvcjt'
// BlackPantherposterhorizontal = 'https://res.cloudinary.com/christekh/image/upload/uxzzxijgPIY7slzFvMotPv8wjKA_aie6qd'
// AquamanBigposterhorizontal = 'http://image.tmdb.org/t/p/w500///5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg'
// JasonMomoa = 'https://image.tmdb.org/t/p/w200/pG1Faei9M8ObR4bOD2ljiSVuaDm.jpg'
// AmberHeard = 'https://image.tmdb.org/t/p/w200/ft4ACLVFBXaOotbicBLm1fODyZr.jpg'
// WillemDafoe = 'https://image.tmdb.org/t/p/w200/dsrEiPDCcr31BPiGjrlSKb0DMsh.jpg'
// PatrickWilson = 'https://image.tmdb.org/t/p/w200/6KbbwBcE69jssnuwDyhmyykaGFH.jpg'

// BirdBoxBigPoster = 'http://image.tmdb.org/t/p/w500///rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg'
// SandraBullock = 'https://image.tmdb.org/t/p/w200/bsAy8f8UZKairXQzRukU5FP4XAQ.jpg'
// JohnMalkovich = 'https://image.tmdb.org/t/p/w200/tCtiWZbKKRgHhLxFCIPfveYAsdc.jpg'
// SarahPoulson = 'https://image.tmdb.org/t/p/w200/jkhpv4oPNcMSvPPDUuCyPIFwYyS.jpg'
// TrevanteRhodes = 'https://image.tmdb.org/t/p/w200/w5mqvAJ4FQAO5iZbO5Q5vv0MJ5s.jpg'
// Description = 'When a mysterious force decimates the worlds population, only one thing is certain: if you see it, you take your life. Facing the unknown, Malorie finds love, hope and a new beginning only for it to unravel. Now she must flee with her two children down a treacherous river to the one place left that may offer sanctuary. But to survive, theyll have to undertake the perilous two-day journey blindfolded.'

// BohemianRhapsody = 'http://image.tmdb.org/t/p/w500///lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg'
// RamiMalek = 'https://image.tmdb.org/t/p/w200/zvBCjFmedqXRqa45jlLf6vBd9Nt.jpg'
// GwilymLee = 'https://image.tmdb.org/t/p/w200/k6geayRL4wHLboFZpQYdkouQpvJ.jpg'
// BenHardy = 'https://image.tmdb.org/t/p/w200/k6geayRL4wHLboFZpQYdkouQpvJ.jpg'
// JosephMazzello = 'https://image.tmdb.org/t/p/w200/44gsv7TlXOOKDGg5aRtqxZjM9ae.jpg'

// FightClub = 'http://image.tmdb.org/t/p/w500///adw6Lq9FiC9zjYEpOqfq03ituwp.jpg'
// EdwardNorton = 'https://image.tmdb.org/t/p/w200/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg'
// BradPitt = 'https://image.tmdb.org/t/p/w200/kU3B75TyRiCgE270EyZnHjfivoq.jpg'
// HelenaBonhamCarter = 'https://image.tmdb.org/t/p/w200/rHZMwkumoRvhKV5ZvwBONKENAhG.jpg'
// MeatLoaf = 'https://image.tmdb.org/t/p/w200/43nyfW3TxD3PxDqYB8tyqaKpDBH.jpg'
// Description = 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'


// PulpFiction = 'http://image.tmdb.org/t/p/w500///dM2w364MScsjFf8pfMbaWUcWrR.jpg'
// JohnTravolta = 'https://image.tmdb.org/t/p/w200/JSt3skdZpGPJYJixCZqH599WdI.jpg'
// SamuelLJackson = 'https://image.tmdb.org/t/p/w200/mXN4Gw9tZJVKrLJHde2IcUHmV3P.jpg'
// UmaThurman = 'https://image.tmdb.org/t/p/w200/xuxgPXyv6KjUHIM8cZaxx4ry25L.jpg'
// BruceWillis = 'https://image.tmdb.org/t/p/w200/kI1OluWhLJk3pnR19VjOfABpnTY.jpg'
// Description = 'A burger-loving hit man, his philosophical partner, a drug-addled gangsters moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.'



// console.log('my id is: target: ',e.currentTarget)
// console.log('my id is: ',e.currentTarget.dataset.id)

// console.log('my previous id is: ',e.currentTarget.previousElementSibling.dataset.id)
// console.log('my next id is: ',e.currentTarget.nextElementSibling.dataset.id)

// let oner = e.currentTarget.previousElementSibling.dataset.id
// let twor = oner-1
// console.log('The id thats before the previous is: ' + twor)
// console.log('The previous id is: ' + oner)
// console.log('MY ELEMENTS ID - the element that I mouse Entered on is: ',e.currentTarget.dataset.id)
// let onerer = e.currentTarget.nextElementSibling.dataset.id
// console.log('The next id is: ' + onerer)
// let tworer = (onerer +++ 1)
// console.log('The id thats after next is: ' + tworer)



//  const element = this.refs[`sliderItem-${e.currentTarget.dataset.id}`]
//  const summary = this.refs[`summary-${e.currentTarget.dataset.id}`]
//  const circlebox = this.refs[`circle-${e.currentTarget.dataset.id}`]
//  TweenLite.to(element,.25,{scale:2})
//   console.log('current: '+e.currentTarget)
//   console.log('current id: '+e.currentTarget.dataset.id)

// {/* <a href="https://www.facebook.com/daniel.ehrlich.98" class="fa fa-facebook"></a>
// <a href="https://www.linkedin.com/in/daniel-ehrlich-36a389136/" class="fa fa-linkedin"></a>
// <a href="mailto:ehrlichdaniel1@gmail.com" class="fa fa-google"></a> */}


// {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}

// .header .aboutme #media .fa-facebook {
//   background: #3B5998;
//   color: white;
//   margin: 10%;
//   width: 4%;
// }

// .header .aboutme #media .fa-linkedin {
//   background: #55ACEE;
//   color: white;
//   margin: 11%;
//   width: 4%;
// }

// .header .aboutme #media .fa-google {
//   background: rgb(146, 11, 11);
//   color: white;
//   margin: 9%;
//   width: 4%;
// }
