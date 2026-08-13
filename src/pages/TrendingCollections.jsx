import React, { useState } from "react";
import { FaFire, FaArrowRight, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TrendingCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Marvel Accessories",
      subtitle: "Legendary Superhero Suits & Tech Gear",
      tag: "Marvel Universe",
      images: [
        {
          name: "Black panther Advanced Suit",
          desc: "The classic web-slinger high-tech suit.",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zkYxk59GXphEKI3WAqOhKvaG8M1H3vcZ9wLwXHtVILctARTT0s5S8S8&s=10",
        },
        {
          name: "Captain America Shield & Gear",
          desc: "High-tech powered exo-skeleton armor.",
          url: "https://images.unsplash.com/photo-1573405202162-52ba7a3e0377?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "spiderrr",
          desc: "Vibranium-alloy defensive tactical shield.",
          url: "https://images.unsplash.com/photo-1697498120296-7a46ff695736?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      id: 2,
      title: "Bollywood Accessories",
      subtitle: "Iconic Celebrity Outfits & Cinematic Fashion",
      tag: "Desi Blockbusters",
      images: [
        {
          name: "SRK Met Gala Look",
          desc: "The legendary rugged style that shook the box office.",
          url: "https://assets.vogue.in/photos/681956b86bd7d45e2da1b5fb/3:4/w_1600,c_limit/2213072048",
        },
        {
          name: "Pushpa",
          desc: "Timeless stylish jacket & layered aesthetic.",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtOFXRzsR2-TnCXfXstyeRau-Bqm3Yj1F4UGUAh6J5mOFJLF8wkrDK2vj&s=10",
        },
        {
          name: "Gangubai look",
          desc: "Rebellious edgy leather and vintage streetwear look.",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbTO6Ki8Y-vUcdvl6o5DUmgguuwI5DGrY1RmzZnyACg&s=10",
        },
      ],
    },
    {
      id: 3,
      title: "Cinematic Materials & Props",
      subtitle: "Mythic Weapons, Artifacts & Relics",
      tag: "Epic Prop Vault",
      images: [
        {
          name: "Arc Reactor",
          desc: "Forged in the heart of a dying star.",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi5r-Qsf8a--G96XVLelLuDxImPQdc0nMF0xdFRXwGSc9S8RhDOXN_QKc&s=10",
        },
        {
          name: "data:image/jpeg;base64,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",
          desc: "Handcrafted ancient wood embedded with mystic crystals.",
          url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUVGBcXFRUVFxUXFxgVFxUXFxUYFRgYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABJEAABAwICBwMHCQUHAwUAAAABAAIDBBEhMQUGEkFRYXETIoEHMkJScpGhFCNigpKiscHwM1NzstEWQ2PC0uHxFYOjCCQ0w9P/xAAbAQACAwEBAQAAAAAAAAAAAAAABAECAwUGB//EADcRAAICAQIDBAoCAQQCAwAAAAABAgMRBCESMUEFIlFxEzJhgZGhsdHh8ELBIwYUM1IVQ1OC8f/aAAwDAQACEQMRAD8A3FAAgAQAIAEACABAAgDwlAEVXax00eBkDjwZ3j/RUlZGPNjdOhvu9WO3jyRC1Gun7uPxcf6LF6hdEdGvsV/+yXwI6fWaod6dvZCzd8hyHZVEeaz5sbP0pO7OST3kKPSSZutJRHlFfAay1Uh9J32iquUjaNNS/ivgNZKuT13/AGj/AFVHOXibKit/xXwEHaWqW+bPKPrFV9LNdWXej08ucI/A9j12ro/73a5PaD/utI6iaE7OydLL+OPJklR+VWRuE9O1w4xusfcbj4raOp8Uc63sSP8ACXxLRojyhUE5De27Jx9GUbHud5vxW0bYS6nLt7Pvr6Z8i0MeCAQQQciMQei1EmsHSABAAgAQAIAEACABAAgAQAIAEACABAAgDxxAFzgBmUAVDT+v9PCSyH56QcPMB5nf4LGd8YnS0vZd1272Xt+xR9IayVVSe/IQ31G4N+GaTnfKR6LTdmU074y/FnFM1ZIflsiRij5LVIWlIXLcfyUmeTvDgrFNxFxHBVNEmM5iFmxiBHTlZjK5EdN1QijIyoV0ZSGMjQrIXkh/oXWOrpDeCZzRvYe9GerTh7lpGco8mJXaau3119zTNWvKzDJaOsZ2Lsu0bcxHrvZ8RzTMLk+Zx7+zZR3refZ1NGgma9oexwc1wu1zSCCOIIwIW5zWmnhiiCAQAIAEACABAAgAQAIAEACABAEZp7T0FJHtzPA9Vo85x4AKspKKyzamid0uGCMh1k10qKwloJji3MacT7R3pKy9y2XI9Lo+za6u9LeX7yIWnjSzZ2IofwqpqkSFO9XRSaJBrwBdxABwFyBc8Oq1QnNpEjTUEz/Mhldz2dgeBk2QR0WihJ8kJWa2iPOS+v0ySLNWqk+jG3jtSG/uawg+9aehkKPtWlcs/D8io1Ql3yxjo15/NH+3fiZ/+Yj/ANX8RvLqVNumjP1XD8yqvTPxNY9uRX8PmQ9bqdVjLsndHm/3mj8Vm9LMah27Q+aaK3pDQ1THi+B9hvADx74yQFm6JrmhuHaOms5TXv2+pXpng5Kpu2msoaSKyMmIkqTJiMhVkZSJXVjW+qoH3gfeMm7oX3MbuNh6LuY8b5LWE3ES1FELV3ufibrqZrvTaQZ82diYC74HkbY4lvrt5jlcBNRmpHEu08qnvy8SzqxgCABAAgAQAIAEACABAAgCr66a5RULNkWfM4dyPh9J/ALOyxQQ3pNHPUS22XVmK6S0nLUyGWZ5c4+4Dg0bgufObk8s9Vp9PCqPDBBAFmxyKHjFU0Q9oKZ8rtiJjnu4N3Di4nBowzJAVoQlN4SM7tTVRHiseC6aK1QOc8lvoRfm8jHoAOqer0qXrM87qu3ZS2qjj2v7Fo0Zo2GLGONrTltZvtzebuPvTKhGPJHFt1Ftr78m/wB8CVYVJkdgoA9JQBySgBjVuQBA1kmasBWdL08Uv7SNr91yO8OjxZw8ColCMuaNK9RbU8wk0VHSGrrSbwvt9GTEeDwLjfmD1S09Mv4nUp7XlytXvRXaynfGdmRpad18j7JGDhjuJS0oOPM6td8LVmDyMpHoQSY3c5WM2dUtS+N7ZYnlj2G7XNNiDyKsngynFNYZu3k28pDay1NVbLKkeacmTW3t9V/Fu/McAzCzOzOPqdL6PvR5fQ0VaCYIAEACABAAgAQAIAq2vmt7KGKzbOnePm2cPpO5D4rOyxQQ3pNLK+Xs6swmpqZJZHSyuLnvN3OP6wCQk23lnqKa41xUYrY6YsxqIux4GJKhmiZctXNUpJbST3jjzDcpHDnf9m3rieAwKaq0ze8ji63tiMO5Tu/Hp7vH6eZodBRRxMDImBjRuA38Sc3HmcU7GKSwjzdls7JcU3ljoKxmdh1kAOY3KCRUBABZAHhCAGFccEAVvSD81Yhlcq381JBFukxUEDere0tLXgOac2nEdeR5jFQ0msMvCcoPMXhlU0joe3eiuRvYcXD2fXHx64lLToxvE6+n7QU+7Zs/EgysDonJKkhg15BBBIIIIIwIIyIO4qSjjk3ryV+UEVbRS1LgKlo7jjh2zQMT/EAzG8YjfZiuedmcfVabg70eX0NIWomCABAAgAQAIAi9ZNNMpIHTPxtg1u9zjkAqykorLNaaZWzUYnz3peulqZnzzG7nHwA3AcAFz5ycnlnqqKY1RUYjcNVBpHrSb2AJJwAGJJOAAG88lCWeRLkorLND1U1YbFaWoAdLm1mbYzuvudJ8G7rnFP00KO75nm9f2m7c117R+v4LvE9MHIHjHoAVQAWQAvCoJEZtLQMNnSsuPRBufcLlVc4rqbw01s1mMWNpNYoB+8P/AG3j+YBV9LE2WgvfRfFCD9bKYZ9oP+24/wAt1HpoF/8AxmofJL4obT6y0j8p2tJyD9qP+cDFSrYPqZT0OohzgyH0qbt2gbg7xl7wtkKSTXMrdU9SUI+Z1s1AEfUS33oJGcsikBlpCgEoLm2EnuD+vB3Pfv4rCyrO6OhpNZwd2fL6Fee0g2IIINiDmDzSp2OZ4QgnB3TTvje2SNxa9hDmubgQ4G4IPFSngznFNYZ9J+TjXBukaa7rCeOzZmDj6L2j1XWPQgjdctQlxI4d9Po5ewtquYAgAQAIA8cbYnABAGLa7ac+WTkNPzUZLYxx4u6n8EldZxM9LoNL6KGXzfP7FalpUudNIZyst0CgsXXU/QPZgVErbSOF42n+7YfSI3PcPsg8SbP0U8PefM832lr3Y/RQfd6+38FthZZMnHHTHoAdRSKCR12zWtLnuDWgXLnEAAcyclDaSyy0YSk+GKyyv12tzcW07dr/ABHghv1WYF3jbxSs9UuUTt6fsWb71zx7Fz/BH/K5Jv2r3PB9E4M6bAs0+Ius+Jy5nQWmrp9SOPb1+I7haALAADkMFdFJPJ7IhkRIytP6xWUh2ohKlLyOjWRErywkxucw5ksJbc5YgYO8UQslHkyL9LTau/FM5bp1wNpWB49ZlmSdS3zHHLLZTleqf8jzuq7EjzqfuFJZmyNL43bbRngQ5vttOLfw5pyM1LdHAu09lLxNEdJIrmIiXXQAlI5ADetpe1Fx+0Aw+mBuPFwGXHLO117a87o6Wi1XC+CfLp7PwQRSp2DxSUkTGqOsMlBVMqY8QO7Iz14iRtt64AjgQFeEsMWurU4tM+pNH1rJomTRO2mSND2u4tcLjp0TaOI008McIIBAAgCj+VTWL5PTiFh+cnuMMxGPOPjl71jdPhWDo9naf0lnE+S+pk1PUgpFnpYokGOv4qC5Pam6tCrnMjxeCAja4SS4FrObW4Od1aMiUxp68viZye1NZwR9FDm+fkX+roLElPJnnGMXNspKiTpLIAb6S01HTMDpLku8yMec+2duDRvccOpwWdtsa1ljmk0VmpliPLq/AptfpqWodtSHAHusHmN6DefpHH8FyrbpWPc9lotDVpo9xb9X1O4HqkWNTRMUD0xBiFyJiILdCEjuRiGisWRVc1ZSHaWQVSl5HTrIStcqI1m9iHnctUKTYx7dzHB7HFrhk4YH/cct60i3F5QhfCNixJElTVjZ+6bMm3AYNk9n1X/RyO7gnqruLZnndXoXX3ocjgm2C3OceIA4LlBIy0vTf3rRgTZ44O4jkfxB3WSlsMPKO3o9Rxx4XzX0IwrIcaPFJk0bF5CNZvP0fIcryQX4XvKweJ2x1et6pdDm6yrHfXvNiWwgCAAlAHznrxpv5XWSSg9wHYj9hpsD4m58UhbLilk9VpKfRVKPXm/MiYXLIcySejzJI9sUYu+RwYwHK53ngBmTwBRGLk8Iiy1Vwc5ckbzoDR0dNBHBHiGDE73OOL3nmSSfFdOKSWEeOtsdk3OXNj6RgKkzIjSNJvCkCr6b0kylj7SQbRNxHHve7nwYLi55gZkKltqgsjOk0ktRZwrl1fgZrV175pHSyO2nOzO4AZBo3NG4LlTk5PLPZ6eqFMFCC2F4JFkxuLJOmkQi7WUTFDLiFvBiV0diyUxwTSORYtxtV6ZpWXD6iIEbi9tx1F8FpGEpeqs+Ri5qHrPHnsRFfpmmIwmYb5d4frcqWUWf9X8GNafVU59ePxRCz1LHC7XNd7JB/BITTT3O5TJSWzIOtkRFBYyHqJFqkJ2SGMjlYVkxFylGTJygqe3Gy8/OtFwf3jRmD/iAe8Djm5TbnZnE1uk4O/Dkd2umDmnXYb1DJFGsBBa7zXCx6cR0Nj4LOSyjamx1yUkVmqgLHOYcwffzHEJNrDPQpqSyuQigrJD3Q2k3008VRH50Tg4DK9vOaeRFweRVovDyZWQU4uLPq/R9YyaKOaM3ZI1r2n6LgCPxThwWmnhjhBBWfKPpj5NQTPBs947JntPww6N2j4LO2XDFjeiq9Jck+S3+B87hInp0xRj1Utk0HyVaPDnyVThhH81H7bgDIeoaWj/uFM6aPORyO1r8RVa67v8Ao1BkqbOEOG1XFACddWMZG57yA1oLnHgALoexaMXJpIwjWHSz6mZ0rssmN3NbuA/rvJJ3rmW2ccsnr9Hplp61Hr1I1pWY8mOYZLKjRomSFNKq4NUxUacAwiG0fXPm+FsXfALuaLsey1cVndXz/H7seT7X/wBTafTNwpXHL5L39fd8R7STdqR2zjIPVJsz7Aw99134aCmqPdjv4vf99x891Pb2tvs788J9I7fl+8tFPFGxt2sa0AX7rWgAZnJZybNIb7jfXzRJipqaW1jYsl3995dMByAJlHiFnoL+K2UfHde78G3aelxVCS/jt8fz9TL60NzsL8cj7wulZVXYsTin5i2lvuqea5NeTI99U9vpbQ4Oz8HZ++64eq7Jqe9ez+R6vRf6h1Ee7d3l8xL5SHf0OYXEspnVLEkekq1leojxQYmSqYJbPEEHrXEEOBIIIIIzBGII5qU8BKKawyzU8jZGCYAAk2kaMmyDE2G5pGI8RuT9c+JZPOamj0U8dOgrmrC4kMCqkojNPw3a2Qbu67/KfxH1Uvaup2NBZmDh4b+79+pCLIcbPLqTNs33yGaZ7WhdTuN3UzyBx7OS72fe7QdGhM1vKOTq4YnnxNIWgqZB5dtJd+mpgcg6Vw6nYZ+D0tqHyR2ey4YUp+4yvbSx10dNcoJybTqnB2FLDHax2Q5189uTvuB6bWz9ULoVx4YpHl9Xb6S6Uvb8kTzalXFjx9UEAUjyj6cLY20zTjJ334+gD3R4uBP1Ql9TPC4UdjsnT8U3a+nLzM+bIkcHosil1BOQDkF1Iby1ZfgPM/m5nlyXpuy+zFDFtq36Lw/J4jt3tyV2aKH3er8fx9ReCRd48bOJMaNqbEIYjdDqX7QZ7V0UeYc4bXDYaC94PIhuz9ZczU9yMmdbs9uxxX7sWnXKgM9FPGBd2xtsG8vYdto8S23iuVRZ6OyMvA711fpK3DxPnOpluvSzlg4VcOhHyPScpZHYRwI296XsqjZHhkhqm6dMuKDFGHjmuBqaJUyw+XQ9XpNTHUQ4lz6o6Sw4eEqSCQ0BVbMvZk92WzDwDv7t3g7Do5y2plh4EtbVx156ommHMHMbk4cARkdioJRxO3aY9nFpt1GItzwt9ZZzWUM6WfBan7viVclLHXbOC5SUyaF5DdK9npHsie7URvZbdts+cafstkH1lrVzFNWswz4H0Mtzmnzp5Vq7tNKT44RhkY+qwE/ec5J3PMz0Ohjw0L27lRusR3I+0VT9rNFFYkPkY024OcAemBKmCzJIpbZwQlLwTNvabm66R5QJCgBg6dxcAgDLNYdJ9vUySA90uszG42G91lvAA+K51kuKTZ6zSV+iqjEYCRZ4GkzsSowTkRqqi/cHV3TcP1+a6nZelVk/SS5L6nB7d7QdVfoYPvS5+xfk5a5enUjw7QvHItFIylEe086sL2QNZ8l0JeJJzk0dkzqbPk+Ai+K4/ac91Beb/r+zo9j0OMZTfkv7/fYXmrNmE79y5R2z5j1rpRBVTRAWaHksAFgGP77AOgcG9Wldqq3irRzZ1cNjIUYqSRQNVkiMnj+Kw1NCug4/Ab0epdFil06+QFy8y4tPDPYKSayjhzlIZOCVODOUi2y1O3sS/vWBx9vFsn32uPinYvKyeeuhwTaEHvUmYi6s2SDwIPu/4UNEpkDXM2ZHtGQcQOl0q1udvi4t/HcbkqSrZL6n1xhrqWW9tmeO/sl4a/7pcrR5mVu8Gj60TByj5T1nqdutqn+tPMfDtHW+CRlzZ6WnauK9iI9rlRo1yWHUZl6yM7mB7j9hwHxLVpSu8K66eKH7jV46gJ08+J1FSpIIXSlZsQzSDNsbyOtrN+JCiTxFs1ohx2Ri/EygPXNPV8R0JFBPEeiVGA4h7Q6DllZ2rHRODjiA47QJya4FuB3eC9JTOOnrUGmeI1UnqbpWZ/8AzoOXar1YJBiNwbEd7AjAjJa/72HtFnpZHrNWazdCfw/FWWvrKvRzHUeq1fupyejo/wA3Bax7Qq6sylobPA23UOj7CjiiODwNqQfTedpw52vs34NC5F9npLHI6dNfo4KPgSGsM+xFfisUaMw7XfQs08jJoYy/AsdYgZHaba5F/OdfwTlFqjlSF7IOXIrjdXKsf3DvtR/6kytRX4mXopHv/Qar9yR1dH/qU/7mvxD0Uj0avVVrmKwJtcuYMfeoepr8SfRyI2upHRO2Hlu0Mw0h1r5A2354Lka2H+TiS2Z6Hs2/ip4W947fYa3SmBxzPC5Tgo2TVFOTTN+hK4eD2tc34tk96Zq5HM1q72TouK2wJZEHKAGOlv2l+LWfyC6Vmu8zr0vNUfL+2M1Bc8KCMH1D/a9vJMZOVwnzbVybUj3es9x97iUkz0kdkkeNUFmyx6iPtUP/AIZ/nYtaeYlr3/h96/svjJymUcViVRUkKSCB1jqD8kl57A/8jT+Spb6jGtEv8y/ehQg5JYO/k920YDInI/ArWiHFZFe0X1U+Gmb9jFqHSEkLtuNxaeRz6r0ckpLDPI4w8os1JpmOo3hku8E2a47zf0Tzy42sSefbS4brdG8J558xy2VzTYix3g4FZFySpK4BAF11W03Z7QTgcCoZZMnNeJrRsbe17kngOKhEszOvqbnDIYAcs/fmepVigz2rjFSBw1oNzg1o855yHLmc8Bj4AoSbeFzIyksvkQOmdZwB2UGQ9M5k8eW/AZcTmna6FDeW7+S+/wBBeU3Plsvm/svn5FYEhJPv+P8AuUvr1mKftOl2bLhlKK8Po/yF1zMHVyF0AS+hm3hn5Ohd7u1b/mW1QlreSHj2Ypg5wi9uKqSMdMssWex/mKWs9Y62m/4V7yPKqasCgksf9pXcVfiFPRERUMs9zTuc4e4kLBo6kZHN1BLkTuprrTu/hn+di1q9YT1jzV71/Zd2yWTJxxvUToAhdYXk00nIxn74H5qlvqsa0bxcv3oUu6TO4F0Bk4kOCY03/NHzFNY80SXsEnOXePMCYJvcZqpJYtFacuBHPiBg1+9vI8Ry/C5KXso6xLxnjZllpqZzrbPeBxBbc3HglTUmaCItt3gOQO0fu4X6kKCSzaxMmkghe8922yMMTY3BdjhmMOXuhEvkU2enI59Mf+FYqMauRkLduZ1huaPOd04Dn06i8K5TeEVlJRKfpnTsk3dHcYMGsGVjn+szvunoQjWtviYPMnmX4IdSSdw7+n+ZqU1vqLzH9B68vL+0dXXMOmme3QWUiZ0GfmZ+sI+Lz/lWtQnrHsh4w3vyTBzjlwuoZJG6bPeaODR8cfzStnrHX03/AAx95HlUNmeFSQS//QX8FfhFvSo81ij2KypZ6s8zfsyuCyktxuuWYp+xDAuVTRsltWJSKhvMPH3HW+ICvB4kjK9cVUv3qXDtymji4E5JUANapm1DO043icR1YRIP5Comu6zWiWLIv2lHSR3kwQEmcPFwtIS4ZJi9keOLj4nDWr0PM8y9jsRqcEZO9hTgjJedC07mQMYSfWIvk52Jw5ZLmWS4pNjMVhFq0NSbRCoSaXLQB9KI7ZC4VC5melKDZcQVcqzPdeKW0jH42LS09Wm4PUh33U3ppbOJjYupVnhMMzOCoJPYxgT4fmfySGtlyidLQx2lL3fvyPUiOnt0E5JzRLbU7j68o/8AEw//ALLapCWqe6Qox+fMrUUFo3oAiNMSXldys3xaLFKz9ZnZq2rivZ9d/wCxm5UNGcuOBUkZ2PpH+xn0Uxg5PEY95VKLstK1QtYOc2Qc+0Y1xP2i4eCws5nT0zzWirLM3HNBPsSMf6rmnDgCozjcuo8W3jt8S6uwNs7EhOI4DWNhJ5UkHtLKA5pOV7O9k4H4EqQ5MplbTGKR8ZzY4t62NgfEY+KSksPB6GuXHFS8RFVNUgsgOFHrR/Vd3R28deOq2PN9oUejtyuT3+50mznjrRtP2krGbicfZGJv1tbxWdsuGDZaKyy+RHFc0YJzRdS1nfe5rGtzc42A8UJNvCJyluy36u6/Uk7+xu6PIRukAa2Td3ce6Scg6xNxvuBrbpLK48TW30Mq9XVZPgT3+vkJaz0A2iQsEbszPXTR21A872d8fV877pctqZYmjKayjN3sT7QumJOChlkdvbaw4Z9Tn+Q8FxbbOObkd6ur0cFD4+f7scLMsCALI5mxFFHvazad7Up27fZLB4JmCwjnXSzNiTQrGIo218ct/Tf8FDZMVl4RATSlzi47ySlWddvD2OLoDJK6sUXbVlNDa+3NE0j6JeNo+AuULmE3iDZ9cpg5Rhvl/wBG7NTT1AGEsbozw2onbQvzIk+6sbV1OhopbOJltlgP4BBKLdQ1O3Gx2+waercPwsfFM1yzE5Wtr4bW/Hf994u8rUTONm4QBGa001xHUD0h2cnKRg7pPtMt4scl7o75Ot2fbmLg+hX1gdI9KAALfT3OmeenUV1WnV9fD16eZ6CvQRkpLKPLzg4ScZLdFh1Voye0lsSBZgNsr2Lr/dCU1Mt1EvWtsktXaUjgFnd5+5gP8x3BZV1Sn5Eymoldq9JyTuvI7Aea0YNHQcea6VNUYchC6yUiQpz3bJ5cjkz55LNofXiSICGp2pYsmvzkjHj+0ZyOI3GwDVzdRok+9Xt7DraXWtrhs+JNVGxO3bjIkY4GxbiCB53S2NwcRvXMacXhnT57oyCtpTG90ZzY4tx32NgfHPxXUi+KKYm1iTQi2Kw2z9UcSN/QfE9Cufrb+Fejjz6nX7O0uf8ANLkuXtfj5L6+8blq5uTpOJyQpyUaH2hKHtpg13mNBfJ/DZi7xODRzcFeKyzG2XDHJMVDi5znnNxJPjwTJy2JtapAQrn7LHHwHjn8LjxWVj2GdLHM+Lw/UQKxGwQSmaB5ENG9tpRj7G0Eckp4XI7NoPjIT9VWgtzLUS7uD6QWokUfyx6H+UaNkcBd1ORO3o24k8Nhzz4BUmso300+Gxe3Y+cwlTsoEFkia1cnxdGfSxb1Gfwv7gtKpYeBbWVcdfEua+hN2umjinmR6qSD0Rte10Uhs2QWJ9VwN2P+qfgXDeolHKwaU2uuakinVdM6N7o3izmkgjmOHEHMHeCkWsPB6GE1JJoSUFsggDofHj+RTWm1TpeHyE9Xo46hZ5S6P+mTn/WzFC2nguDs3kkx7xJ2iGA+iCSNo8MLZrp1Rja/SZz+9TgXwnS+CSwQxN8TiTmTnfmnEhNisS0iYTJSB2C3TEZrcJ8Qhkw2ONHaUlp37UTrX85pxY62W0OI4ixHFLXUxsW4/TdKHI603MyaXt9gs22tLoycS8DZNjuZYN71gTjhvXHt1noYuuDy/Hovyei0vZbtattTUfDk39l9eniQ8tyb/wDAG4DkuXnO7O24rkJEKyZlKAm5qnJk0XnReiDBBsOFpZdl8oObWjGOM8DjtEcS0eimq44WTlamzilhckN56IrUVGroCEAQWmZe8Gern7Rz/XJLzeWdKqHBWl1e/wBvv7yOVSwIA3v/ANP2huzpJapwxqH7LP4cV23H13SD6oWsFsKXSzLBqqsYnEsYc0tcAWuBBByIIsQUAfKetGhXUdXNTOv8247BPpRnvRu8WkX53Sk1hncos44JkUqG53BKWuDm5g3CCylguNJOHgSNydmOB3j9ck7XLiRwdXT6KzC5c15C0ka0FRKykgQ0loz5QwbP7eMWZ/isHoe230eI7u5qwtrzuh/Sajg7suRUEqdfIILJnqqXFGO3EXHA/lw8FaE5QeYvBWdcLI8M1lHey05EjkcR7xiPcV0K+0pLaaz5HLu7GrlvXJr2Pdff6i0MDjlY+IH81k3DtKnrle45tnYeq/jh+/74JOCkk9X7zP8AUtv/ACumS9b5MwX+ndfJ+ol/9l9xwNHu3kD4n3DD4paztqtepFvz2+49R/pS7P8AlsSXsy/rgbSRBnmi59Y4nwGQ/HmuXfr7rtm8LwR3tL2VptLvCOZeL3fu6L4ZGMwvjnzSo2xu4KUZNCLmqxTBbtTdXsG1cze6DeCM+m4H9o4fu2nIek4cAbs1V53Zy9ZqEu5H3lilguSTiSbkneTmUycoQdToAi9PPZDGXekcGjnx8P6Klk+FDGmp9JPfkt3++0z59ybnel0dCW7ycqSmBegonzSxwxC75XNYwfScbC/LHEqUslJPCyfXWg9GMpqeKnj82JjWA7zsixceZNyeq3EG8vI+QQCAMo8uurXaRMr4x3oe5NbfET3XfVcT4PPBZWxysjmjt4ZcL6mIpc6uT1BOST0HX9m7Zce474HcVeufCzK6lXQ4evTz8PeWxsV06mefkmnhnQiQB6Yt+9ADPS+gxU3eyzKjeDYMm6nJknM4O32OJxsqzuh/T6vh7suRS5oXMcWPaWuabOa4EEHgQckq1g60JJrKPAqmqO2qCTsIJHlLmqs1gTdK5Zscgxw9yguxhVBSjGRGShWRg0NnqSjLjq1qha09Y0huBjpzg6TeHS72R8vOdyGJaqpzvI5Gr1qXdre/iWqZ5cbn4AAAAWAAGAAFgAMgnDkCDmKAEJQGgkmwGJKhvBaEHJqK5sznWHSJnkNvMbg0fn+v6JOUuJ5O3CpVQ4F734v7Lp8epEOajJDRwWqclHE1jyC6r7cz6+RvdivHDffI4d9w9lpt1eeC2guojqJfxN0WgqCABACVVTskY6ORocx7S1zTk5rhZwPIglAJ4Pl3XbVp+j6t9O65Z50Lz6cR836wxaeY4EJWccM7FFvHHPUgVQ3yF1IZLLq5pgYRSH2XH8D+v9ta7OHZ8hfU6b064o+uvn+fr587UIk0cU6ZCgDv5OgBKv0dFUNDahhJAs2VlhKwDIXOD2/Rd4FuapKClzN6dROp7FW0jqZUR3dCPlEY3xA9oB9OHzh1G03mlZ0yR16dbXPZ7MrwWQ7nJ21QSO6bNVZpAl6d36ss2NwY62lBpkbThCKSF9F6q1VT3o47R/vZO5Fbk44v6MDitoVylyOffqqqvWe/guf75ly0PqtT0ln/ALaYYiV7bMYeMUZvY5d91zhcBqdrpUd2cPU66duy2X7zHctySTiTiScSTzK3EBFzUAcOFgSchmd1lBKTbwiia26e7Q9jGe6POPE/r9XyTss4nhcju6bTegjmXrv5Lw8/H4eJVlmatHJCkq0PtA6Flq6iOmhF3yOtfc1vpPdyaLnwVorLwZWSUIuTPqjQWiY6SnjpohZkTQ0cSc3OP0iSSeZKaSwcaUnJ5Y/UkAgAQAIAqvlE1QbpGmLBYTx3dA87nWxa4+o6wB6A42VZRyjWm11yyfM9VTvje6ORpY9hLXtOBa4YEFLNYOvGSksoSUEnQKCS06uaxBtopjhk1/DkeS0rt4dnyMNRplf3o7S+T+z+vnzu8MYIBBBByIxBHJNJp8jjyg4vhksMXbCpIOhAgDpsJBuMCMioA8rqWOf/AORDFMctp7fnLfxWESfeVXCL5o1hdZD1WRcupNC890VEJO5r2SN+y9u195ZOiI1DtG1c8MWpPJWH4srTyD6e3xbMVm9N7RqPamOcPn+CTg8kzxnWN8IHH/7Qqf7X2my7ZS/h8/wS9J5MYB+0nkd7IYwfEOPxVlpY9WZT7ZtfqxS+LJ2g1SoocWU7S4elJeQg8Rt3DT0AWsaYR5ISt1t9m0pP3bfQ60qwnErYVK7UMUkDJ7EECE2y0EuIAGZQ2ksstXXKclGKy2Z/rPrR2l4oT3d7hv6frnibEJ2WOe3Q72m0sdOsvefj0Xl7fb8PEqSyNgUlWetbfAYk5DmgjGN2fQvkp1K+Qw9tM0fKZh3uMceYjHPIu52Ho3TVcOFHH1N/pJYXJF9WgqCABAAgAQAIAzfyr+T75Y01dM3/ANywd5ow7ZgGA/iAZHeMDutScMjOnv4Hh8jAXNIJBBBBsQcCCMwRuKWOomnyBAHqgknNA6xy05se/Hvad3sq0ZOPILK4XLFi8mua+69j92DQ9D6agqB828bXqnB1/wA0zC1S8zl36KypcS3j4r+/AlwFoJnYYgDrswgBSKJBJY9FC2FlDJJphUEnd0AcOKAGFa24QBBVECkgq+ntYIKcHacHO3Nbif1+jZZztjHzHaNBZb3n3Y+L/pdfp7TNdPawy1JsTss3MH5/0/GyVlNyeWdiqqFUeGteb6v98Ft5kKVUseWQVwACAwbN5JvJ9sllfVs73nU8Th5vCV49b1RuzztZmuvG7OVq9VnuQ5dTXFsc8EACABAAgAQAIAEAZr5TfJqKvaqqQBtTm9mAbNbnk2TgcjkeIznDIzRqHDZ8jBqiFzHOZI1zHtJDmuBDmkZgg4grBrB01JNZQkSoJOgUE5FI3lpu0kHiFDNIycXlMs+idd547Nk+cbxPnf7/AAV42SiZ2aem31o4fjH7cvhgt2jdcqWSwLtg8Hfq5PQLVXx67CU+zJ/+uSl8n89vg2T8FXG7zXtPK4v7s1rGUZcmJW0W1evFrzQ/p81YyLDQZf8AChkkpGoJFAEAMazSkEYJkmY22Y2hf3DFVckubNq9PbZ6kW/d/ZT9OeUejjBEZMp3bIw9/wCRssnqIrluPV9lWP8A5JJfN/Lb5mc6f16qqi4baJh3Nz+P4G6wlbKR0KtJTVvFZfi9/ly/v2lQlJJJJJJzJNyepVEayeXliRKkqcXUkHbW35k++/JBBsfk18meyW1dczvCzoqd3o8HzD1uDN2/HAMV1Y3ZytVq+LuQ5eJra3OcCABAAgAQAIAEACABAAgCoa9agU2kW7R+aqALMmaMSNzZB6bfiNxzvWUUzWq6Vb2Pn7WbVeqoJOzqY9m/mSNuY3+w+2J5GxG8LCUWjp12xs5ESFQ2R0oJR6oLIEFjuKZzfNcW9CQoazzLRslH1XgkqTWOqj82Zw+H4WKnfo38Q9Jn1oxfnFP+iWp9e69uU3vufxKnil4kcFT51x+H5Hf9vNIOzqHD2SR+BUccvEsqqv8A44/D7iE+nquQfOVMjuTjf45rNyb5sYhGMd4xS8kl/RHzOLvOc483ElVNG2+bEnEcFKKMbyqSjGrypRRsTIUlSQ0JoWerlEVPE6R2+2TRxe7Jo5lWjFy5FLLI1rMmbpqH5N4aLZmmtNU+t/dxn/CBzP0zjwAxTUK1HzONqNXK3ZbL95l7WgoCABAAgAQAIAEACABAAgAQAIAb6QoYp43RTRtkY7NjwHA+B380EptboyTWzyM5yaPfz7CUn3RyHHwd9pZSqzyHatY1tMyvSuip6Z/Z1ET4n7g8Wvbe05OHMEhYOLXMfhZCfqsZqprgEEnikqeoIwKxKDRDqN36zVWapjkOPBVNUzo2UEiT3qSo3lcgq2FFRSTPEcUb5HnJrGlzuthu5q6TfIznKMVmTwjS9VfI/K+0lc/sm59jGQZDyc/FrfC56LeNP/Y513aCW1a97Nd0PoeCljEVPE2Ng3NzJ4uccXHmSSt0ktkcyc5TeZPI+UlAQAIAEACABAAgAQAIAEACABAAgAQAIAb19DFMwxzRskYc2vaHN9xQSm1ujP8ATvkdopbup3yUzjuHzkd/ZedrwDgFm6osar1lkee5RNLeSHSMVzF2VQ3dsP2H25tksB0DisnS+g3HXwfNYKpX6s1sN+1pJ2239m8t+0AWn3qrhJdDZaiuXKSInaHFVwaJp8jtkigumOopgqs2ixwKkWxIVcGqZI0Wiama3ZU07772xvLftWsOt1Krk+hlK+qPOS+JYdHeTDSUvnxsgbxleL25Nj2j4Gy1VEnzFZ9o0x5Zf77S5aG8jtKyzqmV859VvzTOhsS49doLWNEVzEbO0rJeosfP9+BftF6JgpmbFPCyJu8MaBc8XHNx5lbJJchCc5TeZPI9UlQQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAqOu+XgglGCa0+cVjIfoEdXPPCrE2s5G6ai7lsjm2cy9qxmCABAAgAQAIAEACABAAgAQAIAEAf/2Q==",
        },
        {
          name: "Custom Battle-Tested Axe",
          desc: "Heavy-duty custom weapon used in epic sequences.",
          url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200",
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSelectCategory = (index) => {
    setActiveCategory(index);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const imagesLength = collections[activeCategory].images.length;
    setCurrentImageIndex((prev) => (prev + 1) % imagesLength);
  };

  const prevImage = () => {
    const imagesLength = collections[activeCategory].images.length;
    setCurrentImageIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
  };

  const currentItemData = collections[activeCategory].images[currentImageIndex];

  return (
    <section className="relative py-28 bg-black text-white overflow-hidden border-t border-zinc-900">
      
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-black uppercase tracking-[4px] text-rose-400 mb-4 backdrop-blur-md">
              <FaFire className="text-rose-500 animate-bounce" />
              <span>Cinematic Vault</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
              Iconic <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400">Collectibles</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm font-light max-w-sm">
            Select a category on the right, and use the controls or arrows to cycle through iconic movie pieces and wardrobe items.
          </p>
        </div>

        {/* Unique Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Dynamic Big Image Preview Screen */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[550px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group bg-zinc-950">
            <img
              key={`${activeCategory}-${currentImageIndex}`}
              src={currentItemData.url}
              alt={currentItemData.name}
              className="w-full h-full object-cover transition-all duration-700 ease-out animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            {/* Top Info Tag */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-rose-400">
                {collections[activeCategory].tag}
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md text-[10px] font-mono text-white">
                Item {currentImageIndex + 1} of {collections[activeCategory].images.length}
              </span>
            </div>

            {/* Navigation Arrows inside the Image Box */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="w-10 h-10 rounded-full bg-black/60 hover:bg-rose-600 text-white flex items-center justify-center backdrop-blur-md border border-white/20 pointer-events-auto transition-all cursor-pointer shadow-lg"
              >
                <FaChevronLeft size={12} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="w-10 h-10 rounded-full bg-black/60 hover:bg-rose-600 text-white flex items-center justify-center backdrop-blur-md border border-white/20 pointer-events-auto transition-all cursor-pointer shadow-lg"
              >
                <FaChevronRight size={12} />
              </button>
            </div>

            {/* Bottom Footer Info (Name and Description of Current Item) */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-rose-500/30 backdrop-blur-md">
                  <FaStar className="text-yellow-400" size={10} /> {currentItemData.name}
                </span>
              </div>
              <p className="text-xs text-zinc-300 font-light mt-1">
                {currentItemData.desc}
              </p>
            </div>
          </div>

          {/* Right Side: Interactive List Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {collections.map((item, index) => {
              const isActive = activeCategory === index;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectCategory(index)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 cursor-pointer backdrop-blur-xl border ${
                    isActive 
                      ? "bg-zinc-900 border-rose-500 shadow-[0_10px_30px_rgba(225,29,72,0.15)]" 
                      : "bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-900/80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">0{item.id}</span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-black transition-colors ${isActive ? "text-rose-400" : "text-white group-hover:text-rose-300"}`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1 font-medium">
                    {item.subtitle}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                    <span>{isActive ? "Active Collection (Use arrows for items)" : "Click to Explore Section"}</span>
                    <FaArrowRight size={10} className={`transition-transform duration-300 ${isActive ? "translate-x-1" : ""}`} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrendingCollections;