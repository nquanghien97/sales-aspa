export const menu_dinh_duong = (currentAge: number) => ([
  {
    condition: 1 <= currentAge && currentAge < 3,
    dinh_duong: {
      'thua_can': {
        bua_sang: [
          {
            menu: 'Cháo thịt gà nấu rau củ (cà rốt, khoai tây, 30g thịt gà',
            nang_luong: '160 kcal'
          },
          {
            menu: '1 quả chuối nghiền',
            nang_luong: '90 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cháo yến mạch nấu tôm (50g yến mạch, 20g tôm, rau cải bó xôi xay nhuyễn)',
            nang_luong: '130 kcal'
          },
        ],
        bua_phu_chieu: [
          {
            menu: '1/2 quả táo hấp mềm',
            nang_luong: '52 kcal'
          },
          {
            menu: '1 lát bánh mì nguyên cám',
            nang_luong: '60 kcal'
          }
        ],
        bua_toi: [
          {
            menu: 'Cháo rau củ thịt nạc (50g gạo, cà rốt, bí đỏ, 20g thịt nạc)',
            nang_luong: '140 kcal'
          },
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      },
      'thieu_can': {
        bua_sang: [
          {
            menu: 'Cháo thịt bằm nấu bí đỏ (50g gạo, 30g thịt bằm, 50g bí đỏ)',
            nang_luong: '230 kcal'
          },
          {
            menu: '1 quả chuối nghiền',
            nang_luong: '90 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm nát với cá hồi hấp băm nhỏ (50g cơm, 40g cá hồi)',
            nang_luong: '250 kcal'
          },
          {
            menu: 'Canh rau ngót (xay nhuyễn)',
            nang_luong: '50 kcal'
          },
        ],
        bua_phu_chieu: [
          {
            menu: '1 quả cam vắt',
            nang_luong: '60 kcal'
          },
          {
            menu: '1 lát bánh mì phô mai',
            nang_luong: '120 kcal'
          }
        ],
        bua_toi: [
          {
            menu: 'Súp gà bắp (bắp nấu mềm, 30 thịt gà xay nhuyễn)',
            nang_luong: '200 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      },
      'can_nang_chuan': {
        bua_sang: [
          {
            menu: 'Súp khoai tây thịt bò (khoai tây nghiền, 30g thịt bò xay)',
            nang_luong: '180 kcal'
          },
          {
            menu: '1 quả cam vắt',
            nang_luong: '60 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cháo đậu xanh thịt bằm (50g gạo, 30g đậu xanh, 30g thịt bằm)',
            nang_luong: '230 kcal'
          }
        ],
        bua_phu_chieu: [
          {
            menu: '1 quả lê nhỏ hấp mềm',
            nang_luong: '50 kcal'
          },
          {
            menu: '1 hũ sữa chua nguyên chất',
            nang_luong: '100 kcal'
          }
        ],
        bua_toi: [
          {
            menu: 'Cháo cá hồi rau ngót (50g gạo, 30g cá hồi xay nhuyễn, rau ngót)',
            nang_luong: '200 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      }
    }
  },
  {
    condition: 3 <= currentAge && currentAge < 6,
    dinh_duong: {
      'thua_can': {
        bua_sang: [
          {
            menu: 'Bánh mì nguyên cám với thịt gà nướng (1 lát bánh mì, 30g thịt gà)',
            nang_luong: '170 kcal'
          },
          {
            menu: '1/2 quả táo',
            nang_luong: '26 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm gạo lứt (1 bát nhỏ), cá hồi nướng (30g), rau xào',
            nang_luong: '250 kcal'
          },
        ],
        bua_phu_chieu: [
          {
            menu: '1 quả lê nhỏ',
            nang_luong: '50 kcal'
          }
        ],
        bua_toi: [
          {
            menu: 'Bún thịt nướng (bún, thịt nướng, rau thơm)',
            nang_luong: '200 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      },
      'thieu_can': {
        bua_sang: [
          {
            menu: 'Phở bò (70g bánh phở, 50g thịt bò, rau thơm)',
            nang_luong: '300 kcal'
          },
          {
            menu: '1/2 quả chuối ',
            nang_luong: '45 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm trắng (1 bát nhỏ), thịt heo kho tàu (50g thịt, 1 quả trứng)',
            nang_luong: '300 kcal'
          }
        ],
        bua_phu_chieu: [
          {
            menu: '1 hũ sữa chua nguyên chất',
            nang_luong: '100 kcal'
          }
        ],
        bua_toi: [
          {
            menu: 'Cơm trắng (1 bát nhỏ), gà xào nấm (50g gà, 30g nấm)',
            nang_luong: '250 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      },
      'can_nang_chuan': {
        bua_sang: [
          {
            menu: 'Bánh mì trứng ốp la (1 lát bánh mì, 1 quả trứng)',
            nang_luong: '200 kcal'
          },
          {
            menu: '1/2 quả cam',
            nang_luong: '30 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm trắng (1 bát nhỏ), thịt gà nướng (30g), rau cải xanh xào',
            nang_luong: '250 kcal'
          }
        ],
        bua_phu_chieu: [
          {
            menu: '1 quả chuối',
            nang_luong: '90 kcal'
          }
        ],
        bua_toi: [
          {
            menu: 'Cơm trắng (1 bát nhỏ), cá thu hấp (30g), rau muống xào',
            nang_luong: '250 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      }
    }
  },
  {
    condition: 6 <= currentAge && currentAge < 9,
    dinh_duong: {
      'thua_can': {
        bua_sang: [
          {
            menu: '1 bát nhỏ cháo yến mạch với sữa (40g yến mạch, 100ml sữa)',
            nang_luong: '130 kcal'
          },
          {
            menu: '1 quả cam',
            nang_luong: '60 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm gạo lứt (1 bát nhỏ), Thịt ba chỉ heo luộc (50g), Rau muống luộc, Canh cải xanh nấu thịt bằm (30g thịt)',
            nang_luong: '300 kcal'
          }
        ],
        bua_phu_chieu: [
          {
            menu: '1 quả táo',
            nang_luong: '56 kcal'
          },
        ],
        bua_toi: [
          {
            menu: 'Thịt gà luộc (80g), rau muống xào (100g), cơm trắng (1/2 bát)',
            nang_luong: '300 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      },
      'thieu_can': {
        bua_sang: [
          {
            menu: 'Bánh mì kẹp thịt nguội và phô mai (2 lát bánh mì, 40g thịt nguội, 15g phô mai)',
            nang_luong: '300 kcal'
          },
          {
            menu: '1 quả chuối nhỏ',
            nang_luong: '90 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm trắng (1 bát), thịt bò kho gừng (80g thịt bò), Canh bí đỏ nấu tôm (30g tôm), Rau cải xào',
            nang_luong: '650 kcal'
          }
        ],
        bua_phu_chieu: [
          {
            menu: '1 hộp sữa chua nguyên chất và 10g hạt điều',
            nang_luong: '200 kcal'
          },
        ],
        bua_toi: [
          {
            menu: 'Cá hồi áp chảo (80g), cơm trắng (1 bát), canh rau củ thịt gà (30g gà)',
            nang_luong: '450 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      },
      'can_nang_chuan': {
        bua_sang: [
          {
            menu: 'Phở gà (70g bánh phở, 50g thịt gà, rau thơm)',
            nang_luong: '300 kcal'
          },
          {
            menu: '1 quả táo',
            nang_luong: '56 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm trắng (1 bát), thịt gà xào nấm (70g thịt, 30g nấm), rau cải xào, canh rau ngót thịt băm (30g thịt)',
            nang_luong: '380 kcal'
          }
        ],
        bua_phu_chieu: [
          {
            menu: '2 lát bánh mì nguyên cám',
            nang_luong: '120 kcal'
          },
        ],
        bua_toi: [
          {
            menu: 'Cá hấp (100g cá), cơm trắng (1 bát), rau muống xào tỏi',
            nang_luong: '350 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      }
    }
  },
  {
    condition: 9 <= currentAge && currentAge <= 12,
    dinh_duong: {
      'thua_can': {
        bua_sang: [
          {
            menu: 'Bánh mì nguyên cám với trứng luộc (1 lát bánh mì, 1 quả trứng)',
            nang_luong: '200 kcal'
          },
          {
            menu: '1/2 quả cam',
            nang_luong: '30 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm gạo lứt (1 bát nhỏ), cá hồi hấp (70g), rau cải xào tỏi',
            nang_luong: '300 kcal'
          }
        ],
        bua_phu_chieu: [
          {
            menu: '1 quả lê nhỏ',
            nang_luong: '50 kcal'
          },
          {
            menu: '1 hộp sữa chua nguyên chất và 10g hạt điều',
            nang_luong: '200 kcal'
          }
        ],
        bua_toi: [
          {
            menu: 'Thịt gà luộc (80g), rau muống xào (100g), cơm trắng (1/2 bát)',
            nang_luong: '300 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      },
      'thieu_can': {
        bua_sang: [
          {
            menu: 'Phở bò (100g bánh phở, 80g thịt bò, rau thơm)',
            nang_luong: '350 kcal'
          },
          {
            menu: '1 quả chuối nhỏ',
            nang_luong: '90 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm trắng (1 bát), thịt bò xào (120g thịt bò), rau cải xào tỏi',
            nang_luong: '400 kcal'
          }
        ],
        bua_phu_chieu: [
          {
            menu: '1 hộp sữa chua nguyên chất và 10g hạt điều',
            nang_luong: '200 kcal'
          },
          {
            menu: '2 lát bánh mì với phô mai và bơ đậu phộng',
            nang_luong: '700 kcal'
          }
        ],
        bua_toi: [
          {
            menu: 'Cá hồi áp chảo (100g), cơm trắng (1 bát), rau muống xào tỏi',
            nang_luong: '400 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      },
      'can_nang_chuan': {
        bua_sang: [
          {
            menu: 'Bánh mì ốp la (1 lát bánh mì, 2 quả trứng)',
            nang_luong: '300 kcal'
          },
          {
            menu: '1 quả táo nhỏ',
            nang_luong: '52 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm trắng (1 bát), thịt gà nướng (80g), rau cải xào',
            nang_luong: '300 kcal'
          }
        ],
        bua_phu_chieu: [
          {
            menu: '1 quả chuối',
            nang_luong: '90 kcal'
          },
          {
            menu: '1 lát bánh mì với phomai, bơ đậu phộng',
            nang_luong: '400 kcal'
          }
        ],
        bua_toi: [
          {
            menu: 'Cá hấp (70g cá), cơm trắng (1 bát), rau muống xào tỏi',
            nang_luong: '300 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      }
    }
  },
  {
    condition: 12 <= currentAge,
    dinh_duong: {
      'thua_can': {
        bua_sang: [
          {
            menu: 'Bánh mì nguyên cám với trứng luộc (1 lát bánh mì, 1 quả trứng)',
            nang_luong: '200 kcal'
          },
          {
            menu: '1/2 quả cam',
            nang_luong: '30 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm gạo lứt (1 bát nhỏ), cá hồi hấp (100g), rau cải xào tỏi',
            nang_luong: '350 kcal'
          }
        ],
        bua_phu_chieu: [
          {
            menu: '1 quả táo nhỏ',
            nang_luong: '52 kcal'
          },
          {
            menu: '1 lát bánh mì nguyên cám và phô mai',
            nang_luong: '150 kcal'
          }
        ],
        bua_toi: [
          {
            menu: 'Thịt gà nướng (80g), rau muống xào (100g), cơm trắng (1/2 bát)',
            nang_luong: '350 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      },
      'thieu_can': {
        bua_sang: [
          {
            menu: 'Phở bò (100g bánh phở, 80g thịt bò, rau thơm)',
            nang_luong: '350 kcal'
          },
          {
            menu: '1 quả chuối nhỏ',
            nang_luong: '90 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm trắng (1 bát), thịt bò xào (120g thịt bò), rau cải xào tỏi',
            nang_luong: '400 kcal'
          }
        ],
        bua_phu_chieu: [
          {
            menu: '1 hộp sữa chua nguyên chất và 15g hạt điều',
            nang_luong: '250 kcal'
          },
          {
            menu: '2 lát bánh mì với bơ đậu phộng và mật ong',
            nang_luong: '600 kcal'
          }
        ],
        bua_toi: [
          {
            menu: 'Cá hồi áp chảo (100g), cơm trắng (1 bát), rau muống xào tỏi',
            nang_luong: '400 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      },
      'can_nang_chuan': {
        bua_sang: [
          {
            menu: 'Bánh mì ốp la (1 lát bánh mì, 2 quả trứng)',
            nang_luong: '300 kcal'
          },
          {
            menu: '1 quả táo nhỏ',
            nang_luong: '52 kcal'
          }
        ],
        bua_phu_sang: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ],
        bua_trua: [
          {
            menu: 'Cơm trắng (1 bát), thịt gà nướng (100g), rau cải xào',
            nang_luong: '400 kcal'
          }
        ],
        bua_phu_chieu: [
          {
            menu: '1 quả chuối',
            nang_luong: '90 kcal'
          },
          {
            menu: '02 Bánh mì với phô mai và hạt dẻ cười (250 kcal)',
            nang_luong: '500 kcal'
          }
        ],
        bua_toi: [
          {
            menu: 'Cá hồi áp chảo (100g cá hồi), 50g thịt bò nướng, cơm trắng (1 bát), rau muống xào tỏi',
            nang_luong: '650 kcal'
          }
        ],
        bua_phu_toi: [
          {
            menu: '1 ly sữa Wowtop',
            nang_luong: '158 kcal'
          }
        ]
      }
    }
  }
])