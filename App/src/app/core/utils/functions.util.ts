export function pascalize(str: string): string {
	return str.replace(/\w\S*/g, (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase());
}

export function getNameInitials(str: string): string {
	const split = str.split(' ');
	const first = split.shift();
	const second = split[0];
	const firstAndSecond = [first, ' ', second].join();
	const initials = firstAndSecond.match(/\b(\w)/g).join('');
	return initials;
}

export function minutesToHoursAndMinutes(n: any) {
	const hours = n / 60;
	const rhours = Math.floor(hours);
	const minutes = (hours - rhours) * 60;
	const rminutes = Math.round(minutes);
	if (rhours === 0 && rminutes === 0) {
		return `${0} horas`;
	} else if (rhours > 0 && rminutes === 0) {
		return rhours === 1 ? `${rhours} hora` : `${rhours} horas`;
	} else if (rhours === 0 && rminutes > 0) {
		return rminutes === 1 ? `${rminutes} minuto` : `${rminutes} minutos`;
	} else {
		return (rhours === 1 ? `${rhours} hora e ` : `${rhours} horas e `) + (rminutes === 1 ? `${rminutes} minuto` : `${rminutes} minutos`);
	}
}
