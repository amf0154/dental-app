import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components/native';
import Appointment from './components/Appointment';
import SectionTitle  from './components/Sectiontitle';
import { Ionicons } from '@expo/vector-icons';
const DATA = [
  {
    title: '16 сентября',
    data: [        
      {
        id: 1,
        active: true,
        time: '15:30',
        diagnosis: 'пульпит зуба',
        fullname: 'Вася Пупочкин',
        avatar: 'https://gta5.su/wp-content/uploads/2013/12/v_michael_with_sign_256x256.jpg'
      },
      {
        id: 2,
        time: '11:30',
        diagnosis: 'удаление челюсти',
        fullname: 'Андрей Гнида',
        avatar: 'data:image/jpeg;base64,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'
      },
      {
        id: 3,
        time: '19:30',
        diagnosis: 'коронка',
        fullname: 'Юля Брошкина',
        avatar: 'https://tipworker.com/img/reviews_ava/lico_73.png'
      }
  ]
  },
  {
    title: '20 september',
    data: [        
      {
        id: 4,
        time: '15:30',
        diagnosis: 'пульпит зуба',
        fullname: 'Вася Пупочкин',
        avatar: 'https://gta5.su/wp-content/uploads/2013/12/v_michael_with_sign_256x256.jpg'
      },
      {
        id: 5,
        time: '11:30',
        diagnosis: 'удаление челюсти',
        fullname: 'Андрей Гнида',
        avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUREBIWFRUVFRUXGBcWGBUZFhcVFRUXGBYXFRUYHSggGBomGxcVITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGS8gHyMuLS0uKy8tKy0rLS0tLi0tLS0tLS8vLi0tLSstLi8tLSsyKzIrLy0vLS0tMS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECBQYIBAP/xABMEAABAwICBQgFCQUGBAcAAAABAAIDBBEFIQYHEjFBEyJRYXGBkaEyQlJywQgUI1NikrGy0TNDc4KiFTWDs8LhFzRE8BYkJWPD0/H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QALBEAAgIBAwIEBgIDAAAAAAAAAAECAxEEEiExQRNRcaEiIzJhgbEk0RQ0kf/aAAwDAQACEQMRAD8AnFERAEREAREQBERAERa1pNp3htBcVNQ3b+rZz5O9jfR77IDZUUG45r83ijpex0p89lq0jE9beMzf9QIh0RMa0eJufNAdUqhcBvK40qtJsQlP0lXUO7ZZLeF7Lxuqqg73yG/2nFAdrNeDuIKuXEwqJxufIO9y9dPpDXxG7KqoZ2SyD4oDs5FyjhutTGYSLVRkA9WRrXDvNtrzW54Jr7mFhWUzXDi6I7J+6cvNAT2i1DRjWThdcQyKcMkP7uXmOJ6G3yd3FbegCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAsZpBj1NRQmeqkDGDvLj0NbvJXk0z0rp8NpzPOc9zGD0pH8Gt+J4LlnS3SmrxOcyzuJzsyMeiwcA0fHigNx051x1dUXRUd6eHdcftXDpLh6PYPFR1T0c0xJALiTcuPSd5JO9ZnCcA3OlFz7PAe8tnp4GN4Ds4KLZJRNbodFS70iT1N3eJWfpNE4xvDR284rICotuVfnJXMksF8OBQDj4ABekYXT/a8V4/nJT5yUB7P7Lp/teK+EuBwHie8Ar5fOSvvSNlldsxNc89AF/HoQGKq9FYjuDD3bJWBrtE7eiS3tzHityq3GNxYXAkb9k3APEX4r4mpTIwRrWYXLH6TbjpGYW56Fa2K+hLWSuNRAMix55wH2H/qvbNG13C34LXcVwBrrujs13R6p/RdTIuJ01olpbR4jFytK+9vSY7J7D0Ob8dyzy4wwbF6qgnE0D3RyMOfQRxa4cWldQautOoMUh2m2ZOwDlYr5g+03paVIibeiIgCIiAIiIAiIgCIiAIiIAvNidfHTxPnlcGsjaXOJ4ABelQb8oXS03ZhsLrCwkmtx9hh/Me5ARpp/pbNidU6Z1wwc2JnBrL5Ze0d5X3wPCeTAc4XeeHR1dqx2jdBtHlXDJpsOs9KmbVvowHkVczbtB+jaeJHrHqHBVzlhFkI5MR/ZEdJT8tU5zSC0UXsg/vH/AAC1vbU+VWE08rtqWFj3bruaCbDrKtZgVIN1PEP5G/oqVYWOBAokX3ippXejG89jXfop8ZQwjdGwfyt/RfZsYG4AdgXfE+w2EHUujVdJ6NO/vFvxWaotXda/9o6OMdZLj4BS0i54jG1EbDRegps55Jah49SNhA8BfzK8WJV1ZI0w0dE+CI5c1vPd7zuHYpVsqrm47tITg0PxB+6Aj3iAstSauKt37SSOMdpcfAZealZUXXYxtRpuGau6WOxle6Y9fNb90Z+JXy0u0HjlaZKVoZI0egMmvAG7qK3YqhUN7zk7tRzJjmEbd2kbMjbjPI3HArBaOY3UYfVMqISQ+M5t4Obuc13SCFPesfRgSNNVC3nsHPA9Zo9btChDSSguOVaMx6XZ0rTCeUUzjg6q0Xx6Kupo6qE814zHFrh6TT1grKrnHULpaaeq+ZSu+iqPRvubMBlbo2hl3BdHKwrCIiAIiIAiIgCIiAIiIDz4hVthifK82axrnHsaLrjjHcSkrauWd2bppCewE80dwsujNeuL/N8LewGzp3tiHYbud/S0rnXRuDal2juaL9+4IEbvopgfLSRUzch6xHBo9IqfaWBsbGsYLNaAABwAWh6qMMtHJUuGbnbDfdb6R8cu4qQAsVksvBqgsIuCuVoVwUUSZUIiqpEQiqll3BwoirZEwC1FUqi4dKKhVSqFRZ0scAcjxUIac4EKaoewD6OS7m9h3t7ipwK1DWZhnK0hlA50JDv5CbO8N/cpVyxISWUc1v26ea7TZ0bw5p6wbgrsDRHGW1lHBUt/eMBPU7c4eN1yjpVBZzXjiLHu3KZfk5Yxt0s9K45wvD2+5ID/AKmnxWxGVkwIiLpwIiIAiIgCIiAIiICCPlLVxMlHTg5BsshHTtFrW+Gy/wAVHOikXNc7iXAeA/3WzfKCqNrFNj2IYx43PxWP0DpdswM9uUeG1+gUZPCJR6k/aNUQhpYYxwYL9pzPmVlArGi2SvC8/OTYXBXK0K4KaIMqFcFQKoU0RZVVRFI4FRXKiAtVCrirSos6WlUKuKtKiySLSvPWQCSN8bhcOaWnvFl9yrSoMmjmbS6kLWPad8b7eBss58nquLMTdHfKaCRtvtMLXg+DXeK+2s2k2Z6ptt4Lx3i/4rWtUdRsYvSH2pC3uc0hboPKMk1hnWaIimQCIiAIiIAiIgCIiA5b15OJxea/BsY/pWT1WRXnpeok+AJXg17x7OLSdccR8WrJ6oHXnp+yQeAcFXZ9LJ1/UTqFeFrtbpfRQyOilkIe02I2HkeICvg0xw93/UNHvXH4hYlGXka20bCFcF4aXFKeT9nNG7sc0nwXtCkiLLwrgrArwpogyqqgVwU0RZSyorrK0rrOFpVCrirCoMmi0q0q4ry1NdDH+0kY33nAfiVWySPsVaVhZ9LaBu+pZ3XP4BeT/wAc4eSGiUkk2FmP3k26FFxl5Ek0aHraitUuPtQjyBCjfV24jE6Qj65ikzXE60t+iAnzco21aR7WKUYP1zfiVsp+hGa36jr1ERWlYREQBERAEREAWla19MThlHtx2M8p2Ir8Da7nnqA8yFuq5z+UTiJfXRQXyiiBt1vN7+ACA0DD8NrsSndyTXzzOu5xJHTvc5xAA7SpI1a4ZNS1kUFQzYkZym024NrgkZtJByI3FZ3UlhrYaEzW587ySeOyzmtF+jef5l943Xxwnq/+ILJK7c5QXZGmNW1KXme7TnRF9Q75xT2MlgHMvbatuIJ42yUcVNBNGS2SN7SOBaVPbnWF1h5opXklsRc3dewI696yPVyrSSjuNMdOptvOCFACOlZPD9IqyD9nO8DoJ2h4OW8txmM3+gNgSCSGW5pzO/qWMw7HaGqaX/NbNuQC4M5wHEWN7dqlXrfEziD4OWaTw8ZkuT0YPrNe2wqog4cXMyP3TkVIGDY5TVTdqCQO6W7nDtacwo6xfAKFsZmkZLA219uztkDpsQclhG4LPEWz0UwkGRa5hs63u8Var631+H14K3TPtz6E5hXgrRtDNNuXcKeqGxOMgdwfbhbg7qW7XV3QpLyVaUutZ0w0tjom7IG3M4c1nR9p3QPxXeoM1iOIwwN25pGsaOLj+A3laDjWs5ou2kj2vtvyHaG7/FazNQ1ta/lql+yDuL8gB9li9OFYXhpBdyjp7EtJFw3aG8ADf4lUu6tPHV/bktVU2s9F9+DF4jpZXTenO4D2Wc0eWawzi45m57blSLXmnpYTMKFxYBe+y3MdRcVSl0hgfE2aOAljm7Qs1m7x38FVZrPDWXB4La9L4jwpIj6KmkcbNY4k8ACVvGhuhUvKNnqm7DWnaaw+k4jcXDgONltFMyQtbK2IhhAdcAAbJ4rOQSXCjHWSnlbdvqdlplDnOSL9bVM+WdsUbdp74dlrRxc4kAZ9aibHNG6/D3MNTE6EnNjg5pFx0PYSAe+6mvTI/wDqdL/h/wCYshrQw5tTh0zSLujHKsPEOZnl2i471ojds2p9zPKrdl+RXUlpy+vgdTVLrzwAc475IzkCftA5HtCk1cr6lMRMOLQi+Uu1GevaFx5hdULaZQiIgCIiAIiIAuYNfX97Sfwovyrp9c1fKDpS3Ew/hJCw/duEBIGrd9sNpvc+JWPonXxont/y1bqrq9vDox7Be3wdl5KmH/3x4/5a8Wp/OsX2f7PVmvlQfoSNNuWRwlt6ew3nlPHacsc7Ne3A5LbUZ4HaHY7/AHurdM8Xc91grvWavR5IjmY4xTRD0y2VvXtWIt4qLsK0hfAWAj9m5t2nK+ycwfBTvpzgL4ZXVUTSY3naeB6juJ907/FRvjGi9LUuMgcYnneWgFrj0lp49hU6H/jylGXcjcvGjGUextWm+t3D6mgfDTtkMszA3Zcywj3XudxPDLpWOwiJ0dHCx1w8RjtBO5YPCdEKWBwke8yubmAQAwHgS3O/ipD0RwR9XK2V4IhYQc/XcNzR0i+8rmpa1DVcCWnToTnIzuL6HwyQxyG7ZQ2PntycHZZ345rPYa2RsbWyuDngWLh61txI4FfbFH3LWDp2j8EBVnEZuMei/ZVzKKcupWVzrHZttWyvuvwutbwbRGN0r5qh3Kykglx3Z8GjgBuWx3VlG/ZlI4PHmN3xRtNpPp3Cyk2upGFTGWyzRuJ2g6Rov3249iiuix+SmtE4ZxPddp4nlC4g9t1PGnuAva81cIJBtyjRmQRueBxFt6jHG9HqWrPKEmOQ73Nsb2HrNO87s8lVTjTWSjJcMtub1FcWnyjZdMdcGHz0DooGSGaVobsObYRniS7cbdSwmibXR0EQfvIc4X4Ncbj/AL61h8P0KpYnbUsjpberYNb35knct+0awV9bKMiIGkbTtwIHqt7d3UpaqavSrhyR08XS3ORIeBRltBG1/wBRn2Fp+C8tHu7gsri7w2LYGW1zAOo5HyusawWXNVjel5I7R9DfmyPtOXWxCmPUz862THn/APlpv4T/AMpWs6df3hT9jPzrJ6ZVfJ0NQ/oidbtIsPxWbUPmtLv/AGXUribIW1Yf3rR/xm/gV12uTtUNKZMWpQPVeX9zWldYr3DyQiIgCIiAIiIAoU+UlhV46arA9FzonH3htNv91ymtYHTnR9tfQzUp3ubdh9mRvOYfEDuJQEGalcTty9KTvtK38r/9HmtnpXWxgdf/ANah3Ca6agqw8gh8Ty17TxF7OapTw7E4p8RgnidtMfsdx2SCD1heZZS46iU10lF/94N8LVKlR7p+xKwKu5wIez0m+BHEFfIFfRj1liy9ozNLVslHXxad46iFhK/QihlO1yZYT9WS0eG5fUsa7PcekGxHeF9mTTDdID7zR+Ist6vUliccmV04eYPB4qPQWgjO1sOeftuJHgs3PUMiGy0C9smjL/8AAvC+eU75Le6APPevk1oH/ea470liEcBVNvM3kvjBJLnZkr63XyDlXaVKeCxo+l185mX7U2lQuRvKCWD20daHc1+TvJ3YsbiWhtDMS50ey47ywlt+0DJXuaDvV7JZG+jIbdBsfM5q6N6xiayVurnMHg8NNoFQMO0WOf1PcSPALPkxQMAADGjIAC3cAF4HVE59do7G5+d18OTF9pxLndLjfw6F13xivgjg4qXJ/HLIlkdI7bcLDc0dA6T1lWEqr3r5krDKWXk1pEfaZOviNOOjk/zrE64sU2KRsAPOmeL+4zM/1bPmvbpfUsbiTHyODWsDCSdwABJUV6aY+a6pL232BzIx9m++3SSr40uy2uXZLP8ARTK1Qrmu7eDe/k54Vt1k1QRlDEGg/alOXk0rohaTqh0Y+YYexrxaWY8rJ03cOa3uaAO2/St2XqnnhERAEREAREQBERAc6fKIweKGshnjYGmeNxfbc57HAXt02cFrmr+o2XMPszN87KSvlKUO1TUk/wBXLIzulYDn3xDxUQ6JTWLx7rh3KM1lYJQeGdMhyuBXhwypEkUbx6zGnyXrBXz+cPB7GMn2BVwcviCrgVNSItH12kc7JfMOVSpbiOCsMoIvdfW61bGaGrY/lqZ+23jEbeLT0rL4diIewF4LHWzDhY371FWNcSJuvPMTJXVkkgsc9y8tVXNY0kc423NzPktfw+lrJ5OVlJhivlHltu97oR254jycjX3lwbTFJcXVxcvk0ACwVS5S3cEcclxcrSVaXK0lRciSRcSrSVaSrJH2BJ4C/goORJIhXWlUXlqD1tb4WWP1KYPFVYpG2Zu22Nj5bHddlg2/TznBeTTmr2y53tyk92f+y3L5NlDeqqp/YhbGP8R4cf8ALHiveqWIJHkWPMmzoBERWEAiIgCIiAIiIAiIgNL1w4UanCqhoF3RgSjp+jNz5XXMWAT7MwvudceO5dm1ELXtcxwu1wII6iLFceaYYK+hrZqci3JvJYelhN2Ed1kBOGr+v26fkyedE4j+U5t+I7ltIKhjQrSDknNm9UjZkA88urepggna9ocwgtIuCNxBXhaytwsz2Z6+nmpwx3R6QVcHL4hyuDlmUi5o+dfiEcDDJK7ZaPPqA4lavLrDgB5sTyOm4CxWsmrJkjivkG7RHWV4tBMLZPO4yDabG0Gx3FxNhfwK9GumCq8SZjnZJz2RM/8A8RovqH/eC+E+nsJ/cP8AELbzRQD91GP5G/ovJJUULTY8hfosy/kFRKyhrmPuXRhanw/Y1mHTyEfuH/eC9P8AxFi+of8AeCzsdRQuNhyF+xnxC9baOA5iKM/yt/RcjOhLiPuJQub5fsawzWJDxheB2grZsJxeGpZtxOvwIOTgesLRtYWExxlk0TQ3aJa4AWF7XBt4rw6A1ZZVBt8nggjrGYWiVUJ1b4cFKslGe2RKZcrSVaSrS5ee5GxIvJWE0vxDkaWQg85w2G9rsie4XKyzn2zKizTnSFsriQfoor2PtHiR+AV2mrdli8kVXzUIEd6Tz3kDB6o8yp4+T5hRiw50xGc8pcPdYNkd2RXPdJTyVdQ2Ngu+Z4aB1uNh4LsXAMLZS00VOwZRMa3vAzPivfR5DMgiIhwIiIAiIgCIiAIiIAoo16aDuq4hW07bzQts9o3vi35dLm5nsJUroQgOLMJxEwuzzad4+I61JuimlRhAF9uF2dhvb1t/RZbWvqlc5zq3DWjO7pYBvvxfF8W96hmjrZIHEZixs5puMxvuOBVdlUbI4kWV2ODyjpqhro5mB8Tg4Hy6iOBXpBUG6P6SEHaheWO4tPHu4hSNg+mcUlmzjk3e16h7+C8W/RTr5jyvc9OrUxnw+GYLWB/zX+G34rIaszzp/dj/ABesZp1IHVILSCDG3MbuKyOrY86f3Y/xetU3/E/C/ZRH/Y/LNwnw8SuJmcXNHoxgkN7XWzcfJemGniYLMijHY0JtKu0vL8Rm/YJqeJ4s+KM9rQvCMMEbtuncWZ86MkmNw42vm0r3bSptJ4rG01bWSfoI/wCL/octT0R/5uH3j+UradYx+gj/AIv+hy1XRU2q4iek/lK9TTv+M/yYLl89fglkuXxqKljGl73BrRvJWv4xpdBDdsf0j+geiO136KO9ItJnPO1O/sY34D4lZKNHZZy+EaLdTCHC5ZsWlOlvKgxxHZi9ZxyLh8AosxvFeVOwz0B5np7F8cSxV8xtub7I+PSpK1W6p5KlzKuvaWQCzmxm4fL0bQ9Vn4r2qqY1xxE8yy1zeWZbUJoM4O/tOobYAEQNI339KTwyHaepTmrIYmtaGtADWgAAZAAbgAr1aVBERAEREAREQBERAEREAREQBR/p/qspMRvLHaCp+saOa/qkbx7RmpARAce6U6HV2HP2aiIht+bI25jd2OG7sK81Dj8jMnjbH9XjxXYtXSxytMcrGva7ItcAQe0FQFrh1Yx0rRV4fG4RXPKsF3BnQ5vEN3oMmt0lW2Voc0m27Ph1LOaOY0aWQu2dprgA4cctxB6cyo4wvFnw5W2m9HHuK2KlxaGTc6x6HZFVWVqUXFrgthNp5XUlc6ZUmze7r+zs5/osHX6cTOyhYGDpdznfoFqTSDuVVkhoaYvOM+polqrJfY2eh02qGn6UNkH3T3EZeS2CHTKlLbuLmnoIv5hRwhK7ZoqZ9seghqrI98mf0o0h+dEMY20bTcX3k2tc9GROS12acMaXk2AC81TicLPScL9AzK1/FMadKC1o2W+Z7ehaa6lCO2K4KJ2OTy+p9q7SFxyiGyOk7+7oXzwHR+sr5dimidI4nN3qt955yC3HVDq7GIyGarY4UzBla7eUffcD0DO9l0dheFwU0Yip4mxsG5rQAO/pKuwVNkdav9T1NRkT1hE84sQ230UZ6gfTPWfBSgAqohwIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCo9oIIIuDvB3FVRARdplqXoqkuloz82lOeyBeEn3PV7supRJj2qrFqa55AzMHrRc7+nf5LqxEBxNMyeE7LxJG4cHBzT4FXNxScfvHeK7RqKSKQWkjY8dDmgjzCxc+iOGv9Kipzf/ANpg/AIDkI4rP9Y7xVjXzSnZBe8ngLk+AXX0Oh2GM9Gipx/hMP4hZOmoIY8o4mM91rW/gEBypgerXFqogspXsafWl5g8HZ+SlXRDUdTxFsmIScu4Z8m27Y7/AGjvd2ZBS+iA+VNTsjaI42tYxoAa1oAaANwAG5fVEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB/9k='
      },
      {
        id: 6,
        time: '19:30',
        diagnosis: 'коронка',
        fullname: 'Юля Брошкина',
        avatar: 'https://tipworker.com/img/reviews_ava/lico_73.png'
      }
  ]
  },
];

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) =>  <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => (
        <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton>
      <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>

    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2A86FF;
  position: absolute;
  bottom: 15px;
  right: 15px;
  shadow-color: #2A86FF;
  shadow-opacity: 0.8;
  shadow-radius: 3.5;
  elevation: 5;
`;
const Container = styled.View`
  flex: 1;
  margin-top: 0px;
  background: lightgray;
`;