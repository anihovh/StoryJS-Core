/* Korean LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		lang: "ko",
		api: {
			wikipedia: "ko"
		},
		date: {
			month: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			month_abbr: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			day: ["일요일" , "월요일" , "화요일" , "수요일" , "목요일" , "금요일" , "토요일"],
			day_abbr: ["일" , "월" , "화" , "수" , "목" , "금" , "토"]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "yyyy mmm",
			full_short: "mmm d",
			full: "yyyy mmm d ",
			time_short: "HH:MM:ss",
			time_no_seconds_short: "HH:MM",
			time_no_seconds_small_date: "HH:MM'<br/><small>'yyyy mmm d'</small>'",
			full_long: "dddd',' d mmm yyyy 'um' HH:MM",
			full_long_small_date: "HH:MM'<br/><small>'dddd','yyyy mmm d'</small>'"
		},
		messages: {
			loading_timeline: "타임라인을 불러오고 있습니다.... ",
			return_to_title: "첫화면으로",
			expand_timeline: "타임라인 확대",
			contract_timeline: "타임라인 축소",
			wikipedia: "출처: 위키피디아, 우리 모두의 백과사전",
			loading_content: "내용을 불러오고 있습니다.",
			loading: "불러오는중"
			
		}
	}
}
