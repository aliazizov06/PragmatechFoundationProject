const str = 'Proqramlaşdırma nə qədər çox şey bildiyinizlə yox, bildiyinizlə ortaya çıxardığınız işlərlə maraqlanır'
//str daxilində neçə xarakter olduğunu ekrana yazdırın
let val = str.length

//str daxilindəki sözləri ayrı bir massiv içərisində toplayın
val = str.split(' ')

//str daxilində neçə hərf olduğunu ekrana yazdırın
val = str.replace(/ /g,'').replace(/,/g,'').length
