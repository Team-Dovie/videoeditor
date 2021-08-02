/**
 * @file Error messages cs-CZ
 * @author Vladan Kudlac <vladankudlac@gmail.com>
 */

const errors = {
	get uploadMissingFile400() { return {
		code: 400,
		err: '파일이 없습니다.',
		msg: '요청 본문에는 업로드할 파일이 포함되어야 합니다.',
	};},
	get parameterTrackMissing400() { return {
		code: 400,
		err: '매개변수가 누락되었습니다.',
		msg: '필수 "트랙" 매개변수 누락',
	};},
	get parameterTrackTypeMissing400() { return {
		code: 400,
		err: '잘못된 매개변수입니다.',
		msg: '유형 매개변수가 누락되었거나 "video" 또는 "audio"가 아닌 값이 있습니다.',
	};},
	get parameterItemMissing400() { return {
		code: 400,
		err: '누락된 매개변수',
		msg: '트랙 또는 항목 매개변수가 누락되었습니다.',
	};},
	get parameterDurationMissing400() { return {
		code: 400,
		err: '기간이 누락되었습니다.',
		msg: '타임라인에 이미지를 삽입하려면 00: 00: 00,000 형식으로 재생 시간을 입력해야 합니다.',
	};},
	get parameterSplitMissing400() { return {
		code: 400,
		err: '매개변수가 누락되었습니다.',
		msg: 'track, item, time과 같은 필수 매개변수가 누락되었습니다.',
	};},
	get parameterFilterMissing400() { return {
		code: 400,
		err: 'Chybí parametry.',
		msg: 'Chybí povinné parametry: "track", "item", "filter".',
	};},
	get parameterMoveMissing400() { return {
		code: 400,
		err: 'Chybí parametry.',
		msg: 'Chybí povinné parametry: track, trackTarget, item, time.',
	};},
	parameterTimeRange400: (time) => { return {
		code: 400,
		err: 'Parametr mimo rozsah hodnot.',
		msg: `Parametr time musí mít hodnotu mezi 00:00:00,000 a ${time}`,
	};},
	get parameterTimeWrong400() { return {
		code: 400,
		err: 'Chybný parametr.',
		msg: 'Parametr time musí být kladný, ve formátu 00:00:00,000.',
	};},
	get parameterTransitionMissing400() { return {
		code: 400,
		err: 'Chybí parametry.',
		msg: 'Chybí povinné parametry: track, itemA, itemB, transition, duration.',
	};},
	get parameterTransitionWrong400() { return {
		code: 400,
		err: 'Chybné parametry.',
		msg: 'Parametry itemA, itemB musí být celočíselné, nezáporné, duration musí být nenulové, ve formátu 00:00:00,000.',
	};},
	get parameterTransitionOrder400() { return {
		code: 400,
		err: 'Chybné parametry.',
		msg: 'itemA musí přímo následovat po itemB.',
	};},
	get transitionTooLong400() { return {
		code: 400,
		err: 'Příliš dlouhá doba přechodu.',
		msg: 'Přechod je delší než jedna z položek přechodu.',
	};},
	get imgWrongTrack400() { return {
		code: 400,
		err: 'Nepodporovaný typ souboru.',
		msg: 'Obrázky lze vložit pouze na video stopu.',
	};},
	get videoWrongTrack400() { return {
		code: 400,
		err: 'Nepodporovaný typ souboru.',
		msg: 'Video lze vložit pouze na video stopu.',
	};},
	get audioWrongTrack400() { return {
		code: 400,
		err: 'Nepodporovaný typ souboru.',
		msg: 'Audio lze vložit pouze na audio stopu.',
	};},
	get videoDurationMissing400() { return {
		code: 400,
		err: '파일 길이가 없습니다.',
		msg: '비디오에 감지된 길이가 없습니다. 다시 시도하거나 파일을 다시 업로드하십시오.',
	};},
	get audioDurationMissing400() { return {
		code: 400,
		err: 'Chybí délka souboru.',
		msg: 'Audio nemá zjištěnou délku. Opakujte akci, nebo soubor nahrajte znovu.',
	};},
	get tracksIncompatible400() { return {
		code: 400,
		err: 'Nekompatibilní stopy.',
		msg: 'Položky nelze přesouvat mezi video a audio stopami.',
	};},
	get trackDefaultDel403() { return {
		code: 403,
		err: 'Stopu nelze smazat.',
		msg: 'Výchozí stopy "videotrack0" a "audiotrack0" nelze smazat.',
	};},
	get fileWrongTrack403() { return {
		code: 403,
		err: 'Nepodporovaný typ souboru.',
		msg: 'Na časovou osu lze vložit pouze video, obrázek nebo audio.',
	};},
	get sourceInUse403() { return {
		code: 403,
		err: 'Zdroj je používán.',
		msg: 'Zdroj je v projektu používán. Před smazáním z projektu jej odstraňte z časové osy.',
	};},
	get transitionExists403() { return {
		code: 403,
		err: 'Přechod již aplikován.',
		msg: 'Zvolené prvky již mají vzájemný přechod.',
	};},
	filterExists403: (item, track, filter) => { return {
		code: 403,
		err: 'Filtr je již aplikován.',
		msg: `Položka "${item}" na stopě "${track}" má již filtr "${filter}" aplikován.`,
	};},
	get projectStillRendering403() { return {
		code: 403,
		err: 'Zpracování probíhá.',
		msg: 'Projekt je již zpracováván, počkejte na dokončení.',
	};},
	get moveNoSpace403() { return {
		code: 403,
		err: 'Cíl již obsahuje položku.',
		msg: 'Zadané místo není volné, položku nelze přesunout.',
	};},
	get projectNotFound404() { return {
		code: 404,
		err: 'Projekt neexistuje',
		msg: 'Zadaný projekt neexistuje.',
	};},
	get sourceNotFound404() { return {
		code: 404,
		err: 'Zdroj nenalezen.',
		msg: 'Zdroj se v projektu nenachází.'
	};},
	trackNotFound404: (track) => { return {
		code: 404,
		err: 'Stopa nenalezena.',
		msg: `Zadaná stopa  "${track}" se v projektu nenachází.`,
	};},
	itemNotFound404: (item, track) => { return {
		code: 404,
		err: 'Položka nenalezena.',
		msg: `Položka "${item}" se na stopě "${track}" nenachází.`,
	};},
	filterNotFound404: (item, track, filter) => { return {
		code: 404,
		err: 'Filtr nenalezen.',
		msg: `Filtr "${filter}" se na ${item}. položce stopy "${track}" nenachází.`,
	};},
	get projectFailedOpen500() { return {
		err: 'Projekt nelze otevřít',
		msg: 'Během načítání projektu došlo k chybě.',
	};}
};

module.exports = errors;
